import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { StatisticComponent } from './statistic/statistic.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'statistic', component: StatisticComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: '**', component: WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
