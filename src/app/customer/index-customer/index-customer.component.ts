import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faLocation , faLocationDot , faMagnifyingGlassLocation , faPhone , faUtensils , faStar} from '@fortawesome/free-solid-svg-icons'

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
}
