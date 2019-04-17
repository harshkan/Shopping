import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AuthGaurdGuard} from './auth-gaurd.guard';
 
export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent,canActivate:[AuthGaurdGuard] },
    { path: 'shopping', component: ProductListComponent,canActivate:[AuthGaurdGuard] },


   
    { path : '', redirectTo:'login', pathMatch : 'full'}
    
];