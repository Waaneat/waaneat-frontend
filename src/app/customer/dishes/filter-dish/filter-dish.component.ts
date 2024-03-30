import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-dish',
  templateUrl: './filter-dish.component.html',
  styleUrl: './filter-dish.component.scss'
})
export class FilterDishComponent {
  minValue: number = 0;
  maxValue: number = 10000;
  currentValue: number = 2500;
}
