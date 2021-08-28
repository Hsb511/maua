import { Observable } from 'rxjs';
import { TranslatePipe, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { EventEmitter } from '@angular/core';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    const emitter = new EventEmitter<TranslationChangeEvent>(true);
    const translate = jasmine.createSpyObj(
      'TranslateService',
      {
        get: new Observable((observer) => {
          observer.next('something');
          observer.complete();
        }),
      },
      {
        onTranslationChange: emitter,
        onDefaultLangChange: emitter,
        onLangChange: emitter,
      }
    );

    await TestBed.configureTestingModule({
      declarations: [UploadComponent, TranslatePipe],
      providers: [{ provide: TranslateService, useValue: translate }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
