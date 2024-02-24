import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-complete-feature',
  templateUrl: './filter-complete-feature.component.html',
  styleUrl: './filter-complete-feature.component.scss'
})

// const range = document.querySelectorAll('.range-slider input');
// let progress = document.querySelector('.range-slider .progress');
// let gap = 1000;
// const inputValue = document.querySelectorAll('.numberVal input');

// range.forEach(input=>{
//   input.addEventListener('input', e=>{
//     let minrange = parseInt(range[0].value)

//   })
// })

export class FilterCompleteFeatureComponent {
  minValue: number = 0;
  maxValue: number = 10000;
  currentValue: number = 2500;

  


}
