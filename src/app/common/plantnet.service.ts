import { environment } from './../../environments/environment';
import { IdentificationModel } from './models/identification.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PlantnetService {
  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private _snackBar: MatSnackBar
  ) {}

  private static PROJECT = 'all';

  identifyPlant(file: File): Observable<IdentificationModel> {
    const formData = new FormData();
    formData.append('images', file);
    formData.append('organs', 'flower');

    return this.httpClient
      .post<IdentificationModel>(
        `${environment.plantnet_url}v2/identify/${PlantnetService.PROJECT}`,
        formData,
        {
          params: {
            lang: this.translateService.currentLang,
            'api-key': environment.plantnet_api_key,
          },
        }
      )
      .pipe(catchError(this.handleError({ results: [] })));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError(result?: IdentificationModel) {
    return (error: any): Observable<IdentificationModel> => {
      console.log(`Identifying the image failed: ${error.message}`);
      this.translateService
        .get('upload.failure-message')
        .subscribe((translation) =>
          this._snackBar.open(translation, undefined, {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          })
        );
      // Let the app keep running by returning an empty result.
      return of(result as IdentificationModel);
    };
  }
}
