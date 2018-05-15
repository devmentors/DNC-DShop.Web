import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersRoutingModule } from './/users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [SignUpComponent, SignInComponent]
})
export class UsersModule { }
