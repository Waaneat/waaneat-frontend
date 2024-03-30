import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Dish } from '../../../../shared/Dish';
import { Restaurant } from '../../../../shared/Restaurant';
import { User } from '../../../../shared/User';
import { Seller } from '../../../../shared/Seller';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndexSellerService {

  constructor(
    private _http: HttpClient,
    private router: Router,
  ) {}

private dishSubject = new BehaviorSubject<Dish[]>([]);
dish$ = this.dishSubject.asObservable();

  addDish(data: Dish): Observable<Dish> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.post<Dish>('http://localhost:5000/api/dish/create', data , { headers: headers });
    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

  getDishesList() {
   
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      console.log("pourtant il est la")
      this._http.get<any>("http://localhost:5000/api/dish/all", { headers }).subscribe(
                (response) => {
                  const dishesData = response.callback;
                  const dishes = dishesData.map((data:any) => new Dish(
                    data.id, 
                    data.dishName,  
                    data.dishPrice, 
                    data.dishDesc,
                    data.dishImg,
                    data.dishUrl,
                    data.isAvailable
                    ));
                    console.log(response)
                  this.dishSubject.next(dishes);
                },
                (error) => {
                  console.error('Error retrieving permissions:', error);
                  this.router.navigate(['/vendeur/connexion']);
                }
              );
            } else {
              console.error('Token not found in localStorage.');
              this.router.navigate(["vendeur/connexion"])
            }
    
  }
  // getDishesList() {
   
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     });
      
  //     this._http.get<any>(`http://localhost:5000/api/dish/all`, { headers }).subscribe(
  //               (res) => {
  //                 const dishesData = res.callback;
  //                 this.dishSubject
  //                 this.dishSubject.next(res);
  //               },
  //               (error) => {
  //                 console.error('Error retrieving permissions:', error);
  //               }
  //             );
  //           } else {
  //             console.error('Token not found in localStorage.');
  //           }
    
  // }


  getRestaurantData(): Observable<any> {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.get(`http://localhost:5000/api/restaurant/getRestaurantData`, { headers });
    } else {
      console.error('Token JWT introuvable dans les cookies.');
      this.router.navigate(["vendeur/connexion"])
      return new Observable(); 
    }
  }

  getAllResto(): Observable<any> {
    
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this._http.get(`http://localhost:5000/api/restaurant/all`, { headers });
    
  }

  getDish(id: string): Observable<any> {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.get<Dish>(`http://localhost:5000/api/dish/${id}`,{ headers });
    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
    
  }

  // getRestaurant(idUser: string): Observable<any> {
  //   return this._http.get<Restaurant>(`http://localhost:3000/restaurants?idUser= ${idUser}`);
  // }

  getUser(id: string): Observable<any> {
    return this._http.get<User>(`http://localhost:3000/users/${id}`);
  }

  updateDish(id: string , dish: any){
    const token = localStorage.getItem('token');
    if (token) {
      console.log("inside updateDish",dish)
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.put<Dish>(`http://localhost:5000/api/dish/edit/${id}`, dish , { headers });

    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

  updateInfo(id: string , resto: any){
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.put<any>(`http://localhost:5000/api/restaurant/updateRestaurantData/${id}`, resto , { headers });

    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

  updateRestoDesc(id: string , restoDesc: any){
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.put<any>(`http://localhost:5000/api/restaurant/updateRestoDesc/${id}`, restoDesc , { headers });

    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

  deleteDish(id: string){
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.delete(`http://localhost:5000/api/dish/delete/${id}`,{ headers });

    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

  updateAvailability(id: string , availability:boolean){
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.put(`http://localhost:5000/api/restaurant/updateAvailability/${id}`, availability , { headers });

    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

  updateDishAvailability(id: string , availability:any){
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      return this._http.put(`http://localhost:5000/api/dish/updateDishAvailability/${id}`, availability , { headers });

    } else {
      console.error('Token JWT introuvable dans les cookies.');
      return new Observable(); 
    }
  }

}
