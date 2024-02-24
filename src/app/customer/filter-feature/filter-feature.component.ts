import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-filter-feature',
  templateUrl: './filter-feature.component.html',
  styleUrl: './filter-feature.component.scss'
})
export class FilterFeatureComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<FilterFeatureComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
