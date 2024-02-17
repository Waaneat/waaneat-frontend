import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './authentication/customer/login/login.component';
import { RegisterComponent } from './authentication/customer/register/register.component';
import { RegisterSellerComponent } from './authentication/seller/register-seller/register-seller.component';
import { LoginSellerComponent } from './authentication/seller/login-seller/login-seller.component';
import { LoginAdminComponent } from './authentication/admin/login-admin/login-admin.component';
import { IndexSellerComponent } from './seller/index-seller/index-seller.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddDishComponent } from './seller/add-dish/add-dish.component';
import { EditDishComponent } from './seller/edit-dish/edit-dish.component';
import { EditInfoComponent } from './seller/edit-info/edit-info.component';
import { EditDescComponent } from './seller/edit-desc/edit-desc.component';
import { EditBackgroundComponent } from './seller/edit-background/edit-background.component';
import { IndexCustomerComponent } from './customer/index-customer/index-customer.component';
import { SearchDishesComponent } from './customer/search-dishes/search-dishes.component';
import { SearchRestoComponent } from './customer/search-resto/search-resto.component';
import { RestaurantsComponent } from './customer/search-resto/restaurants/restaurants.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DishFromRestoComponent } from './customer/search-resto/restaurants/dish-from-resto/dish-from-resto.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSellerComponent,
    LoginSellerComponent,
    LoginAdminComponent,
    IndexSellerComponent,
    AddDishComponent,
    EditDishComponent,
    EditInfoComponent,
    EditDescComponent,
    EditBackgroundComponent,
    IndexCustomerComponent,
    SearchDishesComponent,
    SearchRestoComponent,
    RestaurantsComponent,
    DishFromRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatPaginatorModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
