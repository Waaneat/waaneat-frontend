import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss'
})
export class LoginAdminComponent {
  constructor( 
    private router:Router,
    private authService:AuthenticationService)
  {}


  contactForm = new FormGroup({
    senderIdentifier:new FormControl('',Validators.required),
    senderPassword: new FormControl('',Validators.required)
  })


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
