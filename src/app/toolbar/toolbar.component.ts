import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  availableLangauges;

  selectedLanguage = 'fr';
  selectedTheme = 'light_mode';

  constructor(private translate: TranslateService,
    private themeService: ThemeService) {
    this.availableLangauges = translate.getLangs();
  }

  changeMode() {
    if (this.selectedTheme == 'light_mode') {
      this.selectedTheme = 'dark_mode';
      this.themeService.setDarkTheme(true);
    } else {
      this.selectedTheme = 'light_mode';
      this.themeService.setDarkTheme(false);
    }
  }
}
