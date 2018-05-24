import { SignInModel } from './../sign-in/sign-in.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './../../shared/auth.service';
import { BaseApiService } from '../../shared/base-api.service';
import { SignUpModel } from '../sign-up/sign-up.model';
import { JwtModel } from '../sign-in/jwt.model';

const identityUrl: string = 'http://localhost:5002';

@Injectable({
  providedIn: 'root'
})
export class IdentityService extends BaseApiService{

  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService, identityUrl);
   }

   signUp(model: SignUpModel) : Observable<any> {
     return super.post<any>('sign-up', model, false);
   }

   signIn(model: SignInModel) : Observable<JwtModel> {
    return super.post<JwtModel>('sign-in', model, false);
  }
}
