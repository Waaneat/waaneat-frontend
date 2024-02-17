import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  constructor( 
    private dialog:MatDialog ,
    private router:Router,
    private authService:AuthenticationService)
  {}


  contactForm = new FormGroup({
    senderIdentifier:new FormControl('',Validators.required),
    senderPassword: new FormControl('',Validators.required)
  })

  openDialog(){
    this.dialog.open(RegisterComponent,{
      width:"400px",
      height: "500px"
    })
  }

  login() {
    const credentials = {
      identifier: this.contactForm.controls.senderIdentifier.value ?? '',
      password: this.contactForm.controls.senderPassword.value ?? ''
    };
  
    console.log(credentials)
    this.authService.loginCustomer(credentials).subscribe(
      () => {
        // Connexion réussie, effectuez les actions nécessaires (redirection, etc.)
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err.error.callback)
        alert("Erreur: " + err.error.callback);
      }
    );
  }

}
