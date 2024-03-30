import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private _http:HttpClient
  ) { }

  getRestaurantDataForCustomer(idResto:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.get(`http://localhost:5000/api/restaurant/${idResto}`, { headers });
  }

  getAllResto(): Observable<any> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.get(`http://localhost:5000/api/restaurant/all`, { headers });
  
  }
  
}
