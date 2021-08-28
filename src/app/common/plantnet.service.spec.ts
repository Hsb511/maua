import { IdentificationModel } from './models/identification.model';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PlantnetService } from './plantnet.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

describe('Plantnet service tests', () => {
  let service: PlantnetService;
  let translate: jasmine.SpyObj<TranslateService>;
  let snacker: jasmine.SpyObj<MatSnackBar>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const translateSpy = jasmine.createSpyObj(
      'TranslateService',
      ['get'],
      { currentLang: 'fr' }
    );
    const snackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: TranslateService, useValue: translateSpy },
        { provide: MatSnackBar, useValue: snackBar },
      ],
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    translate = TestBed.inject(
      TranslateService
    ) as jasmine.SpyObj<TranslateService>;
    snacker = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PlantnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of results when 200', () => {
    const testData: IdentificationModel = {
      results: [
        {
          score: 0.8949875235557556,
          species: {
            genus: {
              scientificNameAuthorship: '',
              scientificNameWithoutAuthor: 'Hibiscus',
              scientificName: 'Hibiscus',
            },
            family: {
              scientificNameAuthorship: '',
              scientificNameWithoutAuthor: 'Malvaceae',
              scientificName: 'Malvaceae',
            },
            commonNames: [
              'Rose de Chine',
              'Hibiscus rose de Chine',
              'Chinesischer Roseneibisch',
            ],
            scientificNameWithoutAuthor: 'Hibiscus rosa-sinensis',
            scientificNameAuthorship: 'L.',
            scientificName: 'Hibiscus rosa-sinensis L.',
          },
        },
      ],
    };

    service.identifyPlant(new File([''], 'file.txt')).subscribe((body) => {
      expect(body).toBeTruthy();
      expect(body.results).toHaveSize(1);
      expect(body).toBe(testData);
    });
    const req = httpTestingController.expectOne(
      `${environment.plantnet_url}v2/identify/all?lang=fr&api-key=${environment.plantnet_api_key}`
    );
    expect(req.request.method).toEqual('POST');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('should call toaster when request fails', () => {
    translate.get.and.returnValue(
      new Observable((observer) => {
        observer.next('L identification a échoué');
        observer.complete();
      })
    );
    service.identifyPlant(new File([''], 'file.txt')).subscribe((body) => {
      expect(body).toBeTruthy();
      expect(body.results).toHaveSize(0);
    });
    const req = httpTestingController.expectOne(
      `${environment.plantnet_url}v2/identify/all?lang=fr&api-key=${environment.plantnet_api_key}`
    );
    expect(req.request.method).toEqual('POST');

    req.flush({}, { status: 400, statusText: 'Bad Request' });
    expect(snacker.open).toHaveBeenCalledWith(
      jasmine.stringMatching('L identification a échoué'), jasmine.falsy(), jasmine.anything()
    );

  });
});
