import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-filter-resto',
  templateUrl: './filter-resto.component.html',
  styleUrl: './filter-resto.component.scss'
})
export class FilterRestoComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<FilterRestoComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
