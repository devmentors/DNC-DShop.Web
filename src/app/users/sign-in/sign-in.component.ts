import { Component, OnInit } from '@angular/core';
import { SignInModel } from './sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private model: SignInModel;

  constructor() { }

  ngOnInit() {
  }

}
