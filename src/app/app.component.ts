import { Observable, of } from 'rxjs';
import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  
  constructor(public authService: AuthService) {}

  signOut() {
    this.authService.removeAccessToken();
  }
}
