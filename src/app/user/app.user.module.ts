import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from'@angular/forms';
import { UserRootComponent } from './component/app.user.root.component';
import { UserService } from './services/app.user.service';
import { from } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import{myUserPassValidator} from './validator/app.user.password.validator'

@NgModule({
  declarations: [
  UserRootComponent,myUserPassValidator
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
   
  ],
  providers: [UserService],
  exports : [UserRootComponent]
 
})
export class UserModule { }
