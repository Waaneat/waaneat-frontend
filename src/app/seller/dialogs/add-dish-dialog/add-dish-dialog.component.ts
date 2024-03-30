import { Component } from '@angular/core';
import { Seller } from '../../../../shared/Seller';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fileTypeValidator } from '../../../../utils/fileTypeValidator';
import { RegisterSellerComponent } from '../../../authentication/seller/register-seller/register-seller.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { IndexSellerComponent } from '../../index-seller/index-seller.component';
import { Dish } from '../../../../shared/Dish';
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import { IndexSellerService } from '../../index-seller/services/index-seller.service';

@Component({
  selector: 'app-add-dish-dialog',
  templateUrl: './add-dish-dialog.component.html',
  styleUrl: './add-dish-dialog.component.scss'
})
export class AddDishDialogComponent {
  faUpload = faUpload
  acceptedExtensions = "jpg , JPG , jpeg, JPEG , png , PNG ";
  fileName = ''
  isLinear = false;
  errors = "";
  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private _indexService: IndexSellerService,
    // private dialogRef: MatDialogRef<AddDishDialogComponent>

  ){
    console.log("yesss const")
    
  }

  // dish:Dish[] = [];

  contactForm = new FormGroup({
    senderDishName: new FormControl('',Validators.required),
    senderDishPrice: new FormControl('',Validators.required),
    senderDishDesc: new FormControl('',Validators.required),
    senderDishImg: new FormControl('',[Validators.required,fileTypeValidator(this.acceptedExtensions)]),
  });

  uploadFile(event: any): void {
    const files = event?.target?.files;

    if (files && files.length > 0) {
        const file = files[0].name;
        this.fileName = file;
        console.log('File:', this.fileName);
    } else {
        console.error("No files selected.");
    }
}

  hasFileValue(): boolean {
    const senderIdentityCardControl = this.contactForm.get('senderIdentityCard');
    return !!senderIdentityCardControl?.value;
  }

  IsFileValue(): boolean {
    const senderIdentityCardControl = this.contactForm.get('senderIdentityCard')?.hasError('inValidExt');
    return !!senderIdentityCardControl;
  }

  


  addDish(){
    if (this.contactForm.valid) {
      const senderDishPriceValue = this.contactForm.value.senderDishPrice;
      const dishPrice = (senderDishPriceValue !== undefined && senderDishPriceValue !== null) ? parseFloat(senderDishPriceValue) : 0;

      const dishData: any = {
        id: '',
        dishName: this.contactForm.value.senderDishName || '',
        dishPrice: dishPrice,
        dishDesc: this.contactForm.value.senderDishDesc || '',
        dishImg: this.fileName || '',
        isAvailable: true
      };

      this._indexService.addDish(dishData).subscribe(
        () => {
          this._indexService.getDishesList()
          this.contactForm.reset();
          this.dialog.closeAll();
          console.log("ca devrait se fermer")
        },
        (error: any) => {
          alert(error.message);
        }
      );
    } else {
      // Gérer les erreurs de validation du formulaire si nécessaire
    }
  }

}
