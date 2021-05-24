import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme?: Observable<boolean> = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService) { }
}
