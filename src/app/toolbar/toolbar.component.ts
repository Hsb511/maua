import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  availableLangauges;

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
