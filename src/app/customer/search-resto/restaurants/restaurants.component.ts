import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faStar , faHeart , faShop , faLock , faPhone , faBars , faClose , faClock , faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
