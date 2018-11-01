import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { LoginService } from './login.service';
import {LoginItem} from './login.model'

@Component({
  selector: 'login-item',
  template: `<div class="float-left">
  <ul class="list-group">
  
  <li>{{myDishHere.name}} </li>
  <li>{{myDishHere.desc}} </li>
  <li>{{myDishHere.price}} </li>
  <li><ng-content></ng-content></li>
  </ul>
  <button class="btn btn-primary" (click)="addItemToCart()">Add to Cart</button>
  <br>
  <hr>
  <div>`,
  
})
export class LoginItemComponent  {
    // @Input('myDish') dish: LoginItem;
    @Input('staticText') text: string;
    @Output() onDishAdd : EventEmitter<LoginItem> = new EventEmitter<LoginItem>();

    private _myDishHere: LoginItem; 

    @Input('myDish')
    set myDishHere(dish: LoginItem) {
      let modifiedDishname = dish.name + " : Updated"
      dish.name = modifiedDishname;
      this._myDishHere = dish;
    }
    get myDishHere() {
        return this._myDishHere;
      } 
      addItemToCart() {
        this.onDishAdd.emit(this.myDishHere);
      }
      
}
