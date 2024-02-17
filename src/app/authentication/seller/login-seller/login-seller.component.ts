import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterSellerComponent } from '../register-seller/register-seller.component';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrl: './login-seller.component.scss'
})
export class LoginSellerComponent {
  errors = "";
  constructor( 
    private dialog:MatDialog,
    private router:Router,
    private authService:AuthenticationService
  ){}


  contactForm = new FormGroup({
    senderIdentifier:new FormControl('',Validators.required),
    senderPassword: new FormControl('',Validators.required)
  })

  openDialog(){
    this.dialog.open(RegisterSellerComponent,{
      width:"600px",
      height: "500px"
    })
  }

  login() {
    const credentials = {
      identifier: this.contactForm.controls.senderIdentifier.value ?? '',
      password: this.contactForm.controls.senderPassword.value ?? ''
    };
  
    console.log(credentials)
    this.authService.loginSeller(credentials).subscribe(
      () => {
        // Connexion réussie, effectuez les actions nécessaires (redirection, etc.)
        this.router.navigate(['/']);
      },
      (err: any) => {
        this.errors = err.error.callback
        console.log(this.errors)
        this.contactForm.reset();
        alert("Erreur: " + err.error.callback);
      }
    );
  }
}
