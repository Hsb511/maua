import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeEnum } from '../common/enum/ThemeEnum';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  availableLangauges;

  selectedLanguage = 'fr';
  selectedTheme = ThemeEnum.LightMode;

  constructor(private translate: TranslateService,
    private themeService: ThemeService) {
    this.availableLangauges = translate.getLangs();
  }

  changeMode() {
    const isDarkTheme = this.selectedTheme == ThemeEnum.DarkMode;
    isDarkTheme ? this.selectedTheme = ThemeEnum.LightMode : this.selectedTheme = ThemeEnum.DarkMode;
    this.themeService.setDarkTheme(isDarkTheme);
  }
}
