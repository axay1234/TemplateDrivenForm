import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserModule } from './user/app.user.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormModule } from './form/module/app.form.module';
@NgModule({
  declarations: [
    AppComponent
    
 
  ],
  imports: [
    BrowserModule,
    LoginModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
