import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  CLASS_FLAG = 'align-middle flag-icon-size flag-icon flag-icon-';
  availableLangauges;

  title = 'maua';
  selectedLanguage = 'fr';
  selectedTheme = 'light_mode';

  constructor(private translate: TranslateService) {
    this.availableLangauges = translate.getLangs();
  }

  changeMode() {
    if (this.selectedTheme == 'light_mode') {
      this.selectedTheme = 'dark_mode';
    } else {
      this.selectedTheme = 'light_mode';
    }
  }
}
