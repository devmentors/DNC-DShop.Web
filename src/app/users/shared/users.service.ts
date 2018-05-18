import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../shared/auth.service';
import { BaseApiService } from '../../shared/base-api.service';
import { SignUpModel } from '../sign-up/sign-up.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
   }

   signUp(model: SignUpModel): Observable<any> {
     return super.post<any>('sign-up', model);
   }
}
