import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faLocation , faLocationDot , faMagnifyingGlassLocation , faPhone , faUtensils , faStar , faBars , faLock , faHeart , faClose , faShop} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrl: './index-customer.component.scss'
})
export class IndexCustomerComponent {
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faLocation = faLocation
  faLocationDot = faLocationDot
  faMagnifyingGlassLocation = faMagnifyingGlassLocation
  faPhone = faPhone
  faUtensils = faUtensils
  faStar = faStar
  faBars = faBars
  faLock = faLock
  faHeart = faHeart
  faClose = faClose
  faShop = faShop
  isMenuOpen = true;
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
