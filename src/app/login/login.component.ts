import { Component, OnChanges, OnInit,DoCheck, OnDestroy,
  AfterContentChecked,AfterContentInit} from '@angular/core';
import { LoginService } from './login.service';
import {LoginItem} from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnChanges , OnInit , DoCheck , OnDestroy, 
                    AfterContentChecked, AfterContentInit{
                   
                      people: any[] = [
                        {
                          "name": "AXAY",
                          "country": 'INDIA'
                        },
                        {
                          "name": "KANUDO",
                           "country": 'USA'
                        },
                        {
                          "name":"ANAND",
                           "country": 'CANADA'
                        },
                        {
                          "name": "DHARAK",
                          "country": 'MOON'
                        },
                        {
                          "name": "RIMPAL",
                          "country": 'MARSH'
                        }
                      ];
  ngOnInit() {
    console.log("init");
    // this.dishes =  this.LoginService.getMenuItems();
  }

  ngOnChanges() {
    console.log("On Changes");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngOnDestroy() {
    console.log("Destroy");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");

  }
  dishes: LoginItem[] = [];
  showAddMenuform: boolean = false;
  showTotalCount:boolean = true;
  cartCount: number= 0;
  staticData:string = " This is Static text";
  totalPrice: number = 0;
  
 constructor(loginService: LoginService){
   this.dishes = loginService.getMenuItems();
 }

 enableMenuForm() {
  this.showAddMenuform = true;
}
disableForm(){
  this.showAddMenuform = false;

}
addNewMenuItem(name,desc,price){
  this.dishes.push({
    name,
    desc,
    price
  })

}
onAddingOfDish(dish: LoginItem) {
  //Save in the DB
  this.cartCount ++;
  this.totalPrice = this.totalPrice + dish.price;
}
}
