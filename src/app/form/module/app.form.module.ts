import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule} from'@angular/forms';
import { FormComponent } from '../component/app.form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports : [FormComponent]
 
})
export class FormModule { }
