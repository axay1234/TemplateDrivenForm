import { Injectable } from "@angular/core";
import { LoginItem } from "./login.model";

@Injectable()
 
export class LoginService {
    getMenuItems() : LoginItem[]{
        let dishes : LoginItem[] = [];
        dishes.push({
            name: 'PBS',
            desc: 'This is made of Panner',
            price : 9.99
        })

        dishes.push({
            name: 'Biryani',
            desc: 'This is made of Rice',
            price : 19.99
        })

        dishes.push({
            name: 'Puri',
            desc: 'This is made of all flour',
            price : 11.99
        })

        return dishes;
    }
 
}
