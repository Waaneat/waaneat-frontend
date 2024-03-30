import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndexSellerComponent } from '../index-seller.component';
import { IndexSellerService } from '../services/index-seller.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-delete-dish',
  templateUrl: './delete-dish.component.html',
  styleUrl: './delete-dish.component.scss'
})
export class DeleteDishComponent {
  faTrash = faTrash;

  @Input() dishId: string = '';

  constructor(
    private router:Router,
    // private dialogRef: MatDialogRef<IndexSellerComponent>,
    private _indexService: IndexSellerService,
    // @Inject(MAT_DIALOG_DATA) public data: Dish
  ){
  
  }

  onDeleteDish(id:string){
    this._indexService.deleteDish(id).subscribe(
      (data) => {
        console.log("supprimer")
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
