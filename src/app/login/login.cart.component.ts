import { Component, Input } from '@angular/core';


@Component({
  selector: 'menu-cart',
  template: `
  <div class="float-right">
    <button class="btn btn-success">Cart({{countOfItemsInCart}})</button>
     <h5 class="totalStyle">Total:{{totalPrice | currency}}</h5>
    <br>
    <hr>
  </div>
 
  `,
  styles: [`
    .totalStyle {
        color:orange;
        margin-right: 10px;
    }
  ` ]
})
export class CartComponent {
    @Input() countOfItemsInCart: number;
    @Input() totalPrice: number = 0;
    // @Input() totalDiscountedPrice: number = 0;


    // applyDiscount(discountPercentage:number) {
    //   this.totalPrice = this.totalPrice / (100/discountPercentage);
    //   return this.totalPrice;
    // }


    
    

}



