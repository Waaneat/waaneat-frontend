import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {faScaleBalanced , faUser , faSearch , faFilter , faLock , faHeart , faPhone , faShop , faBars , faClose , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FilterFeatureComponent } from '../filter-feature/filter-feature.component';
import { FilterCompleteFeatureComponent } from '../filter-complete-feature/filter-complete-feature.component';


@Component({
  selector: 'app-search-dishes',
  templateUrl: './search-dishes.component.html',
  styleUrl: './search-dishes.component.scss'
})
export class SearchDishesComponent {
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
  
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(FilterCompleteFeatureComponent);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
