import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { UrlCardsContainerComponent } from './components/url-cards-container/url-cards-container.component';
import { UrlCardComponent } from './components/url-card/url-card.component';
import { AvatarCardComponent } from './components/avatar-card/avatar-card.component';
import { UrlInputComponent } from './components/url-input/url-input.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LinkEffects } from './store/links.effects';
import { linkReducer } from './store/links.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NotFoundComponent,
    LogoComponent,
    NavButtonComponent,
    UrlCardsContainerComponent,
    UrlCardComponent,
    AvatarCardComponent,
    UrlInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      linksList: linkReducer,
    }),
    EffectsModule.forRoot([LinkEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
