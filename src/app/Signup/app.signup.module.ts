import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from'@angular/forms';
import {SignUpComponent} from "./app.signup.root.component";
import {UserService} from "src/app/user/services/app.user.service";
import { from } from 'rxjs';

@NgModule({
  declarations: [
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
    ],
  providers: [UserService],
  exports : [SignUpComponent]
 
})
export class UserModule { }