import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../modal/signup';
import { AuthenticateServiceService } from '../service/authenticate-service.service';
import { RouterServiceService } from '../service/router-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupComponent implements OnInit {
  signup: Signup = new Signup();
  signupForm: FormGroup;

  constructor(
    private routerService: RouterServiceService,
    private authenticateService: AuthenticateServiceService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('key') != null) {
      this.routerService.tohome();
    } else {
      // Add validation for the fields you want to keep
      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      });
    }
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    this.signup.username = this.signupForm.value.username;
    this.signup.password = this.signupForm.value.password;
    this.signup.email = this.signupForm.value.email;
    this.signup.confirmpassword = this.signupForm.value.confirmPassword;

    this.authenticateService.addUser(this.signup).subscribe(
      (data) => {
        console.log(data);
        this.routerService.tologin();
        alert("Yeah! Registration Successful " + data.username);
      },
      (error: any) => {
        console.log(error);
        alert("Oops! Already registered, try logging in instead.");
      }
    );
  }
}
