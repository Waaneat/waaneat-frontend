import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private _http:HttpClient
  ) { }

  getDishDataForCustomer(idDish:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.get(`http://localhost:5000/api/dish/customer/${idDish}`, { headers });
  }

  getAllDishes(): Observable<any> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.get(`http://localhost:5000/api/dish/customer/all`, { headers });
  
  }

  getAllDishesByIdForCustomer(id:any): Observable<any> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.get(`http://localhost:5000/api/dish/customer/all/${id}`, { headers });
  
  }
}
