import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeEnum } from '../common/enum/ThemeEnum';
import { ThemeService } from '../common/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  availableLanguages;

  private _selectedLanguage = 'fr';
  selectedTheme = ThemeEnum.LightMode;

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {
    translate.addLangs(['en']);
    translate.use(this.selectedLanguage);
    this.availableLanguages = translate.getLangs();
  }

  set selectedLanguage(language: string) {
    this._selectedLanguage = language;
    this.translate.use(language);
  }

  get selectedLanguage(): string {
    return this._selectedLanguage;
  }

  changeMode() {
    const isDarkTheme = this.selectedTheme == ThemeEnum.DarkMode;
    isDarkTheme
      ? (this.selectedTheme = ThemeEnum.LightMode)
      : (this.selectedTheme = ThemeEnum.DarkMode);
    this.themeService.setDarkTheme(isDarkTheme);
  }
}
