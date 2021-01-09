import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestComponent } from './test/test.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [HomeComponent, AboutusComponent, LoginComponent, RegisterComponent, ContactusComponent, TestComponent, ForgotpasswordComponent,LogoutComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[HomeComponent, AboutusComponent, LoginComponent, RegisterComponent, ContactusComponent, TestComponent,LogoutComponent]
})
export class StandardModule { }
