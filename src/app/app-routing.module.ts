import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/customer/login/login.component';
import { LoginSellerComponent } from './authentication/seller/login-seller/login-seller.component';
import { LoginAdminComponent } from './authentication/admin/login-admin/login-admin.component';
import { IndexSellerComponent } from './seller/index-seller/index-seller.component';
import { IndexCustomerComponent } from './customer/index-customer.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { DishesComponent } from './customer/dishes/dishes.component';
import { DishComponent } from './customer/dish/dish.component';
import { RestaurantComponent } from './customer/restaurant/restaurant.component';
import { RestaurantsComponent } from './customer/restaurants/restaurants.component';
import { NotFoundComponent } from './customer/not-found/not-found.component';


const routes: Routes = [
  { path: '',component:IndexCustomerComponent },
  { path: 'restaurant/:idResto',component:RestaurantComponent },
  { path: 'plat/:idDish',component:DishComponent },  
  { path: 'plats',component:DishesComponent },
  { path: 'restaurants',component:RestaurantsComponent },
  { path: 'connexion',component:LoginComponent },
  { path: 'vendeur/connexion',component:LoginSellerComponent },
  { path: 'adminL2D/connexion',component:LoginAdminComponent },
  { path: 'admin/dashboard',component:IndexAdminComponent },
  { path: 'vendeur/dashboard',component:IndexSellerComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
