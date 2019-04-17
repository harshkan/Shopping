import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,HomeComponent,CategoryComponent,ProductListComponent,CartComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
