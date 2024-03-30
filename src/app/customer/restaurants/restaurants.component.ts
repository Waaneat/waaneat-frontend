import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faStar , faLocationArrow , faHeart , faShop , faClock , faPhone , faLock , faBars , faClose , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { Restaurant } from '../../../shared/Restaurant';
import { FilterRestoComponent } from './filter-resto/filter-resto.component';
import { RestaurantService } from '../services/restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent implements OnInit{
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faSearch = faSearch
  faFilter = faFilter
  faLocationDot = faLocationDot
  faStar = faStar
  faLocationArrow = faLocationArrow
  faHeart = faHeart
  faShop = faShop
  faClock = faClock
  faPhone = faPhone
  faLock = faLock
  faBars = faBars
  faClose = faClose
  faAngleLeft = faAngleLeft
  faAngleRight = faAngleRight
  isMenuOpen = true;
  restaurants:Restaurant[] = [];
  
  constructor(
    private _bottomSheet: MatBottomSheet,
    private _restaurantsService: RestaurantService,
  ) {}

  ngOnInit(): void {
    this.onGetAllResto()
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FilterRestoComponent);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onGetAllResto(){
    this._restaurantsService.getAllResto().subscribe(
      (datas:any)=>{
        this.restaurants = datas.callback;
      },
      (err : any) => {
        alert(err.error.callback)
      }
    );
  }
}
