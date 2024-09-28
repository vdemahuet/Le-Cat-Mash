import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./components/core/header/header.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HamburgerMenuComponent} from "./components/core/header/hamburger-menu/hamburger-menu.component";
import {StoreModule} from '@ngrx/store';
import {catReducer} from "./store/reducers/cat.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {CatEffects} from "./store/effects/cats.effect";
import {localStorageSync} from "ngrx-store-localstorage";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function localStorageSyncReducer(reducer: any): any {
  return localStorageSync({
    keys: ['cats'],
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}

@NgModule({
  declarations: [AppComponent, HamburgerMenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
     StoreModule.forRoot({ cats: catReducer }, {metaReducers: [localStorageSyncReducer]}),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
     EffectsModule.forRoot([CatEffects])
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
