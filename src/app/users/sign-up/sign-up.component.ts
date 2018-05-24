import { Component, OnInit } from '@angular/core';

import { IdentityService } from './../shared/identity.service';
import { SignUpModel } from './sign-up.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  readonly roles: string[] = ['user', 'admin'];
  model: SignUpModel;

  constructor(
    private identityService: IdentityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new SignUpModel();
  }

  signUp() {
    this.identityService.signUp(this.model).subscribe(() => {
      alert('Signed up');
      this.router.navigate(['/sign-in']);
    });
  }
}
