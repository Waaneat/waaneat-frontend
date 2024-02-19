import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faSearch , faFilter , faLocationDot , faStar , faLocationArrow} from '@fortawesome/free-solid-svg-icons'


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
}
