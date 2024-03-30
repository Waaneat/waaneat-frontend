import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndexSellerComponent } from '../index-seller.component';
import {faUpload} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-edit-background',
  templateUrl: './edit-background.component.html',
  styleUrl: './edit-background.component.scss'
})
export class EditBackgroundComponent {
  faUpload = faUpload
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
    senderDishDesc: new FormControl('',Validators.required),
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
