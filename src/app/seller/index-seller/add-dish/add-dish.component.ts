import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import { AddDishDialogComponent } from '../../dialogs/add-dish-dialog/add-dish-dialog.component';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrl: './add-dish.component.scss'
})
export class AddDishComponent {
  faAdd = faAdd

  constructor(
    private dialog:Dialog
  ){

  }

  onAddDish(){
    console.log("yesss")
    this.dialog.open(AddDishDialogComponent,{
      width:"600px",
      height: "850px",
    })

    
  }
}
