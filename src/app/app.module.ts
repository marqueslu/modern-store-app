import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { ProductListComponent } from './components/product-list/product-list.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
