import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faStar , faLocationArrow , faHeart , faShop , faClock , faPhone , faLock , faBars , faClose , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FilterFeatureComponent } from '../filter-feature/filter-feature.component';


@Component({
  selector: 'app-search-resto',
  templateUrl: './search-resto.component.html',
  styleUrl: './search-resto.component.scss'
})
export class SearchRestoComponent {
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
  
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(FilterFeatureComponent);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
