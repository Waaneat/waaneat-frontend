import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterSellerComponent } from '../../authentication/seller/register-seller/register-seller.component';
import { MatDialogRef } from '@angular/material/dialog';
import { fileTypeValidator } from '../../../utils/fileTypeValidator';
import { IndexSellerComponent } from '../index-seller/index-seller.component';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrl: './edit-dish.component.scss'
})
export class EditDishComponent {
  acceptedExtensions = "jpg , JPG , jpeg, JPEG , png , PNG ";
  fileName = ''
  isLinear = false;
  errors = "";
  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<IndexSellerComponent>
  ){
    
  }

  contactForm = new FormGroup({
    senderDishName: new FormControl('',Validators.required),
    senderDishPrice: new FormControl('',Validators.required),
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

  register(){
    
  }
}
