import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterSellerComponent } from '../../../authentication/seller/register-seller/register-seller.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { fileTypeValidator } from '../../../../utils/fileTypeValidator';
import { IndexSellerComponent } from '../index-seller.component';
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import { IndexSellerService } from '../services/index-seller.service';
import { Dish } from '../../../../shared/Dish';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrl: './edit-dish.component.scss'
})
export class EditDishComponent implements OnInit {
  faUpload = faUpload
  acceptedExtensions = "jpg , JPG , jpeg, JPEG , png , PNG ";
  fileName = ''
  isLinear = false;
  errors = "";
  
  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private _indexService: IndexSellerService,
    @Inject(MAT_DIALOG_DATA) public data: Dish
  ){
  
  }
  ngOnInit(): void {
    console.log(this.data);
    this.contactForm = this._formBuilder.group({
      senderDishName: [this.data.dishName, Validators.required],
      senderDishPrice: [this.data.dishPrice != null ? this.data.dishPrice.toString() : null, Validators.required], // Convertir en chaîne de caractères si non null
      senderDishDesc: [this.data.dishDesc, Validators.required],
      senderDishImg: ['', Validators.required]
    });
  }

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


  editDish(){
    const senderDishPriceValue = this.contactForm.value.senderDishPrice;
    const dish = {
      id: this.data.id,
      dishName: this.contactForm.value.senderDishName || '',
      dishPrice: (typeof senderDishPriceValue === 'string') ? parseFloat(senderDishPriceValue) : senderDishPriceValue || 0,
      dishDesc: this.contactForm.value.senderDishDesc || '',
      dishImg: this.fileName ? this.fileName : this.data.dishImg,
      isAvailable: true
    }
    console.log("this is dish inside editDish",dish)
    this._indexService.updateDish(this.data.id , dish).subscribe(
      (data: any) => {
        this.contactForm.reset();
        this.dialog.closeAll()
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
