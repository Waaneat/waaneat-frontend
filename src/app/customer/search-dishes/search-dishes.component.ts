import { Component } from '@angular/core';
import {faScaleBalanced , faUser , faSearch , faFilter} from '@fortawesome/free-solid-svg-icons'


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
}
