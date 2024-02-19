import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/customer/login/login.component';
import { LoginSellerComponent } from './authentication/seller/login-seller/login-seller.component';
import { LoginAdminComponent } from './authentication/admin/login-admin/login-admin.component';
import { IndexSellerComponent } from './seller/index-seller/index-seller.component';
import { IndexCustomerComponent } from './customer/index-customer/index-customer.component';
import { SearchDishesComponent } from './customer/search-dishes/search-dishes.component';
import { SearchRestoComponent } from './customer/search-resto/search-resto.component';
import { RestaurantsComponent } from './customer/search-resto/restaurants/restaurants.component';
import { DishFromRestoComponent } from './customer/search-resto/restaurants/dish-from-resto/dish-from-resto.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';

const routes: Routes = [
  // { path: '',component: },
  { path: '',component:IndexCustomerComponent },
  { path: 'restaurant',component:RestaurantsComponent },
  { path: 'platfromresto',component:DishFromRestoComponent },
  { path: 'plats',component:SearchDishesComponent },
  { path: 'restaurants',component:SearchRestoComponent },
  { path: 'connexion',component:LoginComponent },
  { path: 'vendeur/connexion',component:LoginSellerComponent },
  { path: 'adminL2D/connexion',component:LoginAdminComponent },
  { path: 'admin/dashboard',component:IndexAdminComponent },
  { path: 'vendeur/dashboard',component:IndexSellerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
