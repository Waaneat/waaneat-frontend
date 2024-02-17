import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../shared/User';
import { Seller } from '../../shared/Seller';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any{
    return{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
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
  registerCustomer(customer: User):any{
    let options = this.getStandardOptions()
    options.headers = options.headers.set("Authorization","value-need-for-authorization")
    return this.http.post("http://localhost:5000/customers/register",customer,options)
  }
  loginCustomer(credentials:{ identifier: string; password: string; }): Observable<any> {
    const options = this.getStandardOptions();
    return this.http.post('http://localhost:5000/auth/customer', credentials, options)
  }

  //Sellers' authentication
  registerSeller(seller: Seller):any{
    let options = this.getStandardOptions()
    options.headers = options.headers.set("Authorization","value-need-for-authorization")
    return this.http.post("http://localhost:5000/sellers/register",seller,options)
  }
  loginSeller(credentials:{ identifier: string; password: string; }): Observable<any> {
    const options = this.getStandardOptions();
    return this.http.post('http://localhost:5000/auth/seller', credentials, options)
  }

}
