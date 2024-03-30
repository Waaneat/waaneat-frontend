import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndexSellerService } from '../services/index-seller.service';

@Component({
  selector: 'app-update-resto-desc',
  templateUrl: './update-resto-desc.component.html',
  styleUrl: './update-resto-desc.component.scss'
})
export class UpdateRestoDescComponent implements OnInit {
  acceptedExtensions = "jpg , JPG , jpeg, JPEG , png , PNG ";
  fileName = ''
  isLinear = false;
  errors = "";
  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public restoData: any,
    private _indexService:IndexSellerService

  ){
    
  }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      senderRestoDesc: [this.restoData.restoDesc, Validators.required],
    });
  }

  contactForm = new FormGroup({
    senderRestoDesc: new FormControl('',Validators.required),
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
    
    const resto = {
      restoDesc:this.contactForm.value.senderRestoDesc || ''
    }
    console.log("c mon resto",resto)
    // const { restoDesc }:any = this.contactForm.value.senderRestoDesc || '';

    this._indexService.updateRestoDesc(this.restoData.id , resto).subscribe(
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
