import { Component, OnInit } from '@angular/core';
import { SignInModel } from './sign-in.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: SignInModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.model = new SignInModel();
  }

  signIn() {
  }
}
