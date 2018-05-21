import { Component, OnInit } from '@angular/core';
import { SignUpModel } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  readonly roles: string[] = ['user', 'admin'];
  model: SignUpModel;

  constructor() { }

  ngOnInit() {
    this.model = new SignUpModel();
  }

  signUp() {
    alert(this.model.role);
  }
}
