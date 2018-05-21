import { Injectable } from '@angular/core';

const accessTokenKey = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isSessionStored: boolean;

  get storage() {
    return this.isSessionStored ? window.sessionStorage : window.localStorage;
  }

  setAccessToken(accessToken: string, isSessionStored: boolean): void {
    this.isSessionStored = isSessionStored;
    this.storage.setItem(accessTokenKey, accessToken);
  }

  getAccessToken(): string {
    return this.storage.getItem(accessTokenKey);
  }

  removeAccessToken(): void {
    this.storage.removeItem(accessTokenKey);
  }
}
