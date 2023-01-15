import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    login: new FormControl(null),
    password: new FormControl(null)
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  login() {
    if (this.form.valid) {
      
    }
  }

  ngOnDestroy(): void {
    
  }
}