import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {faScaleBalanced , faUser , faSearch , faFilter , faLock , faHeart , faPhone , faShop , faBars , faClose , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FilterDishComponent } from './filter-dish/filter-dish.component';
import { Dish } from '../../../shared/Dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faSearch = faSearch
  faFilter = faFilter
  faLock = faLock
  faHeart = faHeart
  faPhone = faPhone
  faShop = faShop
  faBars = faBars
  faClose = faClose
  faAngleLeft = faAngleLeft
  faAngleRight = faAngleRight
  isMenuOpen = true;
  dishes:Dish[] = [];
  
  constructor(
    private _bottomSheet: MatBottomSheet,
    private _dishService:DishService
  ) {}

  ngOnInit(): void {
    this.onGetAllDish()
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FilterDishComponent);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onGetAllDish(){
    this._dishService.getAllDishes().subscribe(
      (datas:any)=>{
        this.dishes = datas.callback;
      },
      (err : any) => {
        alert(err.error.callback)
      }
    );
  }
}
