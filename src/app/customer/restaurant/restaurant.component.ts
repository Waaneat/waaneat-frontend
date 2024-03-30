import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faStar , faHeart , faShop , faLock , faPhone , faBars , faClose , faClock , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { RestaurantService } from '../services/restaurant.service';
import { DishService } from '../services/dish.service';
import { Dish } from '../../../shared/Dish';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent implements OnInit{
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faSearch = faSearch
  faFilter = faFilter
  faLocationDot = faLocationDot
  faStar = faStar
  faHeart = faHeart
  faShop = faShop
  faLock = faLock
  faPhone = faPhone
  faBars = faBars
  faClose = faClose
  faClock = faClock
  faAngleLeft = faAngleLeft
  faAngleRight = faAngleRight
  isMenuOpen = true;
  idResto = '';
  dishes:Dish[] = [];


  constructor(
    private route:ActivatedRoute,
    private _restaurantService:RestaurantService,
    private _dishService:DishService
  ){}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idResto');
    this.idResto = id !== null ? id : '';
    if (id !== null) {
      this.onGetRestoData(id) // Utiliser l'ID récupéré
      this.onGetAllDishByIdForCustomer(id)
    }
    
  }

  restoData = {
    id:"",
    restoName:"",
    tel:"",
    adress:"",
    restoDesc:"",
    hourStart:"",
    hourEnd:"",
    isAvailable:false
  }

  onGetRestoData(id:any){
    this._restaurantService.getRestaurantDataForCustomer(this.idResto).subscribe(
      (data:any)=>{
        this.restoData = data.callback.data;        
      },
      (err : any) => {
        alert("error"+err.error.callback)
      }
    );
  }

  onGetAllDishByIdForCustomer(id:any){
    this._dishService.getAllDishesByIdForCustomer(id).subscribe(
      (datas:any)=>{
        this.dishes = datas.callback;
      },
      (err : any) => {
        alert(err.error.callback)
      }
    );
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
