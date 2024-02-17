import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot} from '@fortawesome/free-solid-svg-icons'

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

}
