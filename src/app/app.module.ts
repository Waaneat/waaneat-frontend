import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";

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
import { EditDishComponent } from './seller/index-seller/edit-dish/edit-dish.component';
import { EditBackgroundComponent } from './seller/index-seller/edit-background/edit-background.component';
import { IndexCustomerComponent } from './customer/index-customer.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { DeleteDishComponent } from './seller/index-seller/delete-dish/delete-dish.component';
import { AddDishDialogComponent } from './seller/dialogs/add-dish-dialog/add-dish-dialog.component';
import { AddDishComponent } from './seller/index-seller/add-dish/add-dish.component';
import { UpdateAvailabilityComponent } from './seller/index-seller/update-availability/update-availability.component';
import { UpdateDishAvailabilityComponent } from './seller/index-seller/update-dish-availability/update-dish-availability.component';
import { UpdateSellerInformationComponent } from './seller/index-seller/update-seller-information/update-seller-information.component';
import { UpdateRestoDescComponent } from './seller/index-seller/update-resto-desc/update-resto-desc.component';
import { FilterRestoComponent } from './customer/restaurants/filter-resto/filter-resto.component';
import { RestaurantComponent } from './customer/restaurant/restaurant.component';
import { DishComponent } from './customer/dish/dish.component';
import { DishesComponent } from './customer/dishes/dishes.component';
import { FilterDishComponent } from './customer/dishes/filter-dish/filter-dish.component';
import { RestaurantsComponent } from './customer/restaurants/restaurants.component';
import { NotFoundComponent } from './customer/not-found/not-found.component';


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
    EditDishComponent,
    EditBackgroundComponent,
    IndexCustomerComponent,
    RestaurantsComponent,
    IndexAdminComponent,
    DeleteDishComponent,
    AddDishDialogComponent,
    AddDishComponent,
    UpdateAvailabilityComponent,
    UpdateDishAvailabilityComponent,
    UpdateSellerInformationComponent,
    UpdateRestoDescComponent,
    FilterRestoComponent,
    RestaurantComponent,
    DishComponent,
    DishesComponent,
    FilterDishComponent,
    NotFoundComponent  
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
    MatPaginatorModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
