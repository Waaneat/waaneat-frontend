import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndexSellerService } from '../services/index-seller.service';

@Component({
  selector: 'app-update-seller-information',
  templateUrl: './update-seller-information.component.html',
  styleUrl: './update-seller-information.component.scss'
})
export class UpdateSellerInformationComponent implements OnInit{
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
    console.log("update:",restoData)
  }
  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      senderUsername: [this.restoData.username, Validators.required],
      senderRestoName: [this.restoData.restoName, Validators.required],
      senderEmail: [this.restoData.email, Validators.required],
      senderTel: [this.restoData.tel, Validators.required],
      senderHourStart: [this.restoData.hourStart, Validators.required],
      senderHourEnd: [this.restoData.hourEnd, Validators.required],
    });
  }

  contactForm = new FormGroup({
    senderUsername: new FormControl('',Validators.required),
    senderRestoName: new FormControl('',Validators.required),
    senderEmail: new FormControl('',Validators.required),
    senderTel: new FormControl('',Validators.required),
    senderHourStart: new FormControl('',Validators.required),
    senderHourEnd: new FormControl('',Validators.required),
    
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
      username: this.contactForm.value.senderUsername || '',
      restoName: this.contactForm.value.senderRestoName || '',
      email: this.contactForm.value.senderEmail || '',
      tel: this.contactForm.value.senderTel || '',
      hourStart: this.contactForm.value.senderHourStart || '',
      hourEnd: this.contactForm.value.senderHourEnd || '',
    }

    this._indexService.updateInfo(this.restoData.id , resto).subscribe(
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
