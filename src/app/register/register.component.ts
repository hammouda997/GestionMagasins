import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationServiceService
    ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
    });
  }


  register(){
    this.authenticationService.register(this.username.value,this.nom.value,this.prenom.value,this.password.value).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['login']);
      }, error => {
        console.log(error);
      })
}


  get username() {
    return this.signUpForm.get('username');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get nom() {
    return this.signUpForm.get('nom');
  }

  get prenom() {
    return this.signUpForm.get('prenom');
  }


}
