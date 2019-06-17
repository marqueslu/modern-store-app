import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routing } from './app.routing';

import { AppComponent } from './app.component';

import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { NumberDirective } from './directives/number.directive';

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
    CartPageComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
