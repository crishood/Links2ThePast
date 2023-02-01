import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
