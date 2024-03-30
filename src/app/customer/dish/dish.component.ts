import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faArrowLeft , faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faSearch = faSearch
  faFilter = faFilter
  faLocationDot = faLocationDot
  faArrowLeft = faArrowLeft
  faCartShopping = faCartShopping
  idDish = '';

  constructor(
    private route:ActivatedRoute,
    private _dishService:DishService
  ){}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDish');
    this.idDish = id !== null ? id : '';
    if (id !== null) {
      this.onGetDishData(id) // Utiliser l'ID récupéré
    }
    
  }

  dishData = {
    id:"",
    dishName:"",
    dishDesc:"",
    dishPrice:"",
    dishImg:"",
    idResto:""
  }

  onGetDishData(id:any){
    this._dishService.getDishDataForCustomer(this.idDish).subscribe(
      (data:any)=>{
        this.dishData = data.callback.data;  
        console.log(data)      
      },
      (err : any) => {
        alert("error"+err.error.callback)
      }
    );
  }
}
