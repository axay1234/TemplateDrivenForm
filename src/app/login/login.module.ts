import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule} from'@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginItemComponent } from './login.item.component';
import { from } from 'rxjs';
import { CartComponent } from './login.cart.component';

@NgModule({
  declarations: [
    LoginComponent,LoginItemComponent,CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoginService],
  exports : [LoginComponent, LoginItemComponent]
 
})
export class LoginModule { }
