import { Component, Input } from '@angular/core';
import { Dish } from '../../../../shared/Dish';
import { IndexSellerService } from '../services/index-seller.service';

@Component({
  selector: 'app-update-dish-availability',
  templateUrl: './update-dish-availability.component.html',
  styleUrl: './update-dish-availability.component.scss'
})
export class UpdateDishAvailabilityComponent {
  @Input() dishData: Dish = {
    id: '',
    dishName: "",
    dishPrice: 0,
    dishDesc: "",
    dishImg: "",
    dishUrl:"",
    isAvailable: false
  };

  constructor(
    private _indexService: IndexSellerService
  ){
    console.log("updatedishess:",this.dishData.isAvailable)
  }

  onUpdateDishAvailability(event:any) {
    const isChecked = event.target.checked; // Obtenez l'état de la case à cocher

    const dish:any = {
      availability : isChecked
    }

    console.log("availability", isChecked);

    this._indexService.updateDishAvailability(this.dishData.id , dish).subscribe(
      (data) => {
        console.log("modifier")
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
