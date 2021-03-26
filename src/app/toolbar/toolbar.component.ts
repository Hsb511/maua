import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  CLASS_FLAG = 'align-middle flag-icon-size flag-icon flag-icon-';
  available_langauges;

  title = 'maua';
  selected_language = 'fr';

  constructor(private translate: TranslateService) {
    this.available_langauges = translate.getLangs();
  }
}
