import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { UploadComponent } from './upload/upload.component';
import { StatisticComponent } from './statistic/statistic.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

export function HttpLoaderFactory(http: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    {prefix: "./assets/i18n/home/", suffix: ".json"}
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    StatisticComponent,
    GalleryComponent,
    ToolbarComponent,
    LoadingModalComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
        defaultLanguage: 'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    }),
    BootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatFileUploadModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    BootstrapIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
