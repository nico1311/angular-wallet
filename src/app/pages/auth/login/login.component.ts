import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  public buttonLoading = false;

  ngOnInit(): void {
  }

  onLoginSubmit(event: Event): void {
    event.preventDefault();
    const values = this.loginForm.value;
    console.log('values: ', values);
    this.buttonLoading = true;

    setTimeout(() => {
      this.buttonLoading = false;
    }, 1000);
  }

}
