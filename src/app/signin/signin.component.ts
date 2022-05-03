import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionDetails } from '../models/ConnectionDetails';
import { LoginDetails } from '../models/LoginDetails';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
  loginDetails: LoginDetails
  connectionDetails: ConnectionDetails = new ConnectionDetails();
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private globalVriables: GlobalService,
  ) { }

  ngOnInit(): void {
    localStorage.setItem('token', '');
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  test() {
    console.log(this.username.value + " " + this.password.value);
  }

  handleLogin() {
    console.log("loggin in ..")
    this.connectionDetails.username = this.username.value
    this.connectionDetails.password = this.password.value
    console.log(this.connectionDetails);
    this.authenticationService.authenticate(this.connectionDetails).subscribe(
      response => {
        console.log(response)
        this.loginDetails = response
        this.globalVriables.role = this.loginDetails.roles[0]
        this.globalVriables.token = "Bearer " + this.loginDetails.accessToken
        this.globalVriables.username = this.username
        localStorage.setItem('token', this.globalVriables.token);
        //sessionStorage.setItem('username',this.username);
        this.router.navigate(['view-Fournisseur']);
      }, error => {
        console.log(error);

      }

    )
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
