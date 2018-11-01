import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";
import { Key } from "protractor";

@Directive({
    selector:`[userPassValidator]`,  
    providers:[{
        provide: NG_VALIDATORS,
        useClass: myUserPassValidator,
        multi:true
    }]
})

export class myUserPassValidator implements Validator{
     validate(control: FormControl) : {[key: string]: any} {
         console.log(control.value)

         if(control.value!=null && control.value.length>0){
             if(control.value.length>9){
                 return null;

             }else{
                 return{passwordError:true};
             }
             }else {
                 return{passwordError:true}
             
         }
     }
}