import { JwtModel } from './jwt.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService } from './../shared/identity.service';
import { SignInModel } from './sign-in.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: SignInModel;

  constructor(
    private identityService: IdentityService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new SignInModel();
  }

  signIn() {
    this.identityService.signIn(this.model).subscribe(jwt => {
      const isSessionStored = !this.model.rememberMe;
      this.authService.setAccessToken(jwt.accessToken, isSessionStored);
      this.router.navigate(['/']);
    })
  }    
}
