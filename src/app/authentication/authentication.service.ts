import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../shared/User';
import { Seller } from '../../shared/Seller';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private storageService:StorageService
  ) { }

  private getStandardOptions(): any{
    return{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        credentials: 'include'
      })
    }
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.log('There is an issue with client or network: ',error.error)
    }else{
      console.log('Server error: ',error.error)
    }
    return throwError( ()=> new Error('Cannot see users. Try again'))
  }

  //Customers' authentication
  registerCustomer(formData: any): Observable<any>{
    let options = this.getStandardOptions()
    // options.headers = options.headers.set("Authorization","value-need-for-authorization")
    return this.http.post("http://localhost:5000/api/customers/register",formData,options)
  }
  loginCustomer(credentials: any): Observable<any> {
    const options = this.getStandardOptions();
    return this.http.post('http://localhost:5000/api/auth/customer', credentials, options)
  }

  //Sellers' authentication
  registerSeller(formData: any): Observable<any>{
    let options = this.getStandardOptions()
    // options.headers = options.headers.set("Authorization","value-need-for-authorization")
    return this.http.post("http://localhost:5000/api/seller/register",formData,options)
  }

  logoutSeller(){
    let options = this.getStandardOptions()
    this.storageService.logoutUser()
    this.http.get("http://localhost:5000/api/auth/seller/logout",options)
  }

  loginSeller(credentials: any): Observable<any> {
    const options = this.getStandardOptions();
    return this.http.post('http://localhost:5000/api/auth/seller', credentials, options)
  }

}
