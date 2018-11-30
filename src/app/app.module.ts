import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routing, RoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { ProductListComponent } from './components/product-list/product-list.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    Routing  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
