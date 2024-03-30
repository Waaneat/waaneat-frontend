import { Component } from '@angular/core';
import { User } from '../../../../shared/User';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { fileTypeValidator } from '../../../../utils/fileTypeValidator';
import { Seller } from '../../../../shared/Seller';
import { Restaurant } from '../../../../shared/Restaurant';
import {StorageService} from '../../../services/storage.service'


@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrl: './register-seller.component.scss'
})


export class RegisterSellerComponent {
  
  acceptedExtensions = "jpg , JPG , jpeg, JPEG , png , PNG ";
  fileName = ''
  isLinear = false;
  errors = "";
  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegisterSellerComponent>,
    private storageService: StorageService
    
  ){
    
  }

  contactForm = new FormGroup({
    senderUsername: new FormControl('',Validators.required),
    senderEmail: new FormControl('',Validators.required),
    senderPassword: new FormControl('',Validators.required),
    senderConfirmPassword: new FormControl('',Validators.required),
    senderTel: new FormControl('',Validators.required),
    senderAdress: new FormControl('',Validators.required),
    senderEntreprise: new FormControl('',Validators.required),
    senderIdentityCard: new FormControl('',[Validators.required,fileTypeValidator(this.acceptedExtensions)]),
    senderCategory: new FormControl('',Validators.required),
    senderHourStart: new FormControl('',Validators.required),
    senderHourEnd: new FormControl('',Validators.required),
    senderCGU: new FormControl('',Validators.requiredTrue)
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
    let seller = new Seller(
      "",
      this.contactForm.controls.senderEntreprise.value ?? '',
      this.contactForm.controls.senderIdentityCard.value ?? '',
      this.contactForm.controls.senderCategory.value ?? '',
      this.contactForm.controls.senderHourStart.value ?? '',
      this.contactForm.controls.senderHourEnd.value ?? ''
    );

    let user = new User(
      "",
      this.contactForm.controls.senderUsername.value ?? '',
      this.contactForm.controls.senderEmail.value ?? '',
      this.contactForm.controls.senderTel.value ?? '',
      this.contactForm.controls.senderPassword.value ?? '',
      this.contactForm.controls.senderAdress.value ?? '',
      "seller"
    );

    let restaurant = new Restaurant(
      "",
      this.contactForm.controls.senderEntreprise.value ?? '',
      "pas de description",
      false,
      "neant.jpg",
      this.contactForm.controls.senderHourStart.value ?? '',
      this.contactForm.controls.senderHourEnd.value ?? ''
    )

    let formData:any = {
      username: user.username,
      email: user.email,
      tel: user.tel,
      password: user.password,
      adress: user.adress,
      companyName: seller.companyName,
      identityCard: this.fileName,
      category: seller.category,
      hourStart: restaurant.hourStart,
      hourEnd: restaurant.hourEnd
    }

    if(this.contactForm.invalid){
      alert('Formulaire invalide')
    }else{
      this.authService.registerSeller(formData).subscribe((res)=>{

        this.storageService.loginUser(res.callback.token)
        
        this.dialogRef.close();
        
        this.router.navigate(['/vendeur/dashboard'])
      },(err:any)=>{
        this.errors = err.error.callback
        console.log(this.errors)
        this.contactForm.reset();
        alert("erreur: "+err.error.callback)
      })
    }
  }

}
