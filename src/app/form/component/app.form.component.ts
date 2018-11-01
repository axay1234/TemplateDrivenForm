import { Component, Input } from '@angular/core';


@Component({
  selector: 'form-root',
  templateUrl: `../template/app.form.template.html`,
  styleUrls: [`../styles/app.form.scss` ]
})
export class FormComponent {
  // constructor(private formService : FormService){

  // }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
     }
