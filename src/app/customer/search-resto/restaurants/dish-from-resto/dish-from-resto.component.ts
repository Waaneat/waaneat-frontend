import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faArrowLeft , faCartShopping} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-dish-from-resto',
  templateUrl: './dish-from-resto.component.html',
  styleUrl: './dish-from-resto.component.scss'
})
export class DishFromRestoComponent {
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faSearch = faSearch
  faFilter = faFilter
  faLocationDot = faLocationDot
  faArrowLeft = faArrowLeft
  faCartShopping = faCartShopping
}
