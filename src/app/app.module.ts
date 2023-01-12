import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule, HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalController } from '@ionic/angular';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader,TranslateService } from '@ngx-translate/core';


export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, "../assets/i18n/",".json")
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
      IonicModule.forRoot(),
      HttpClientModule,
      NgSelectModule,
      AppRoutingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ],

  providers: [HttpClient,
        TranslateService,
        {provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy },
        ModalController],
  bootstrap: [AppComponent],
})
export class AppModule {}
