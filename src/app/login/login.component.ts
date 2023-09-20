import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, database } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  message = '';
  public db1: any[] = [];

  contactForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]), //thuoc tinh firstname su dung form control
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
  });

  get email() {
    return this.contactForm.get('email');
  }
  get password() {
    return this.contactForm.get('password');
  }

  constructor(
    private router: Router,
    private api: LoginService
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    const req: database = {};
    req.email = this.email?.value ?? undefined;
    req.password = this.password?.value ?? undefined;
    this.api.login(req as database).subscribe((res) => {
      if (res.user) {
        this.message = 'log in succesfully';
        console.log(res.user.accessToken);
        localStorage.setItem('token', res.accessToken);
        if (res.user.roles === 'USER') {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['admin']);
        }
      }
    });
  }

  onSignUp(): void {
    const req: database = {};
    req.email = this.email?.value ?? undefined;
    req.password = this.password?.value ?? undefined;
    this.api.signUp(req as database).subscribe((res) => {
      if (res.body.status === 201) {
        this.message = 'sign up succesfully';
        console.log(this.message);
      }
    });
  }
}
