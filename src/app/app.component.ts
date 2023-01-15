import { Component } from '@angular/core';
import { LanguageKind } from './core/enums';
import { AppTranslateService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    appTranslateService: AppTranslateService
  ) {
    appTranslateService.setDefaultLang(LanguageKind.EN);
    appTranslateService.use(LanguageKind.EN);
  }
}