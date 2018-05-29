import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const accessTokenKey = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  isUserLogged$: Subject<boolean> = new BehaviorSubject<boolean>(true);
  
  private isSessionStored: boolean;
  
  constructor() {
      this.isSessionStored = !!window.sessionStorage.getItem(accessTokenKey)
      this.isUserLogged$.next(!!this.storage.getItem(accessTokenKey));
  }

  private get storage() {
    return this.isSessionStored ? window.sessionStorage : window.localStorage;
  }

  setAccessToken(accessToken: string, isSessionStored: boolean): void {
    this.isSessionStored = isSessionStored;
    this.storage.setItem(accessTokenKey, accessToken);
    this.isUserLogged$.next(true);
  }

  getAccessToken(): string {
    return this.storage.getItem(accessTokenKey);
  }

  removeAccessToken(): void {
    this.storage.removeItem(accessTokenKey);
    this.isUserLogged$.next(false);    
  }
}
 