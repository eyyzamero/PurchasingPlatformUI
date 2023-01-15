import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEn from '@angular/common/locales/en';
import localePl from '@angular/common/locales/pl';
import { LanguageKind } from './core/enums';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthenticationInterceptor } from './core/interceptors/authentication.interceptor';

registerLocaleData(localeEn, LanguageKind.EN);
registerLocaleData(localePl, LanguageKind.PL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => {
          const loader = new TranslateHttpLoader(httpClient, '/assets/i18n/');
          return loader;
        },
        deps: [
          HttpClient
        ]
      }
    }),
    AngularSvgIconModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
