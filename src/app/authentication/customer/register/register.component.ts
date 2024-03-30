import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../../../shared/Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errors = '';
  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private dialogRef: MatDialogRef<RegisterComponent>
  ){}

  contactForm = new FormGroup({
    senderUsername: new FormControl('',Validators.required),
    senderEmail: new FormControl('',Validators.required),
    senderPassword: new FormControl('',Validators.required),
    senderConfirmPassword: new FormControl('',Validators.required),
    senderAdress: new FormControl('',Validators.required),
    senderTel: new FormControl('',Validators.required),
    senderCGU: new FormControl('',Validators.required)
  });

  register(){
    new Customer(
      ""
    );

    let formData:any = {
      username : this.contactForm.controls.senderUsername.value ?? '', // Valeur par défaut si c'est null
      email : this.contactForm.controls.senderEmail.value ?? '',
      tel : this.contactForm.controls.senderTel.value ?? '',
      password : this.contactForm.controls.senderPassword.value ?? '',
      adress : this.contactForm.controls.senderAdress.value ?? '',
      userType : "customer"
    }
    
    if(this.contactForm.invalid){
      alert('error')
    }else{
      this.authService.registerCustomer(formData)
      
      .subscribe(()=>{
        this.dialogRef.close();
        this.router.navigate(['/'])
      },(err:any)=>{
        alert("erreur: "+err.error.callback)
      })
    }
  }

}
