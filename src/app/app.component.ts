import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CLASS_FLAG = 'align-middle flag-icon-size flag-icon flag-icon-';
  AVAILABLE_LANGUAGES = ['fr', 'gb'];

  title = 'maua';
  selected_language = 'fr';
}
