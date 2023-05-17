import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Dunks',
    price: 150,
    quantity: 1,
    id: 1,
  }, 
  {
    product: 'https://via.placeholder.com/150',
    name: 'Dunks',
    price: 150,
    quantity: 3,
    id: 2,
  }]}; 
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product', 
    'name', 
    'price', 
    'quantity', 
    'total', 
    'action'
  ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>) : number{
    return this.cartService.getTotal(items);
  }

  addQuantity(item: { quantity: number; }) : number {
    console.log(item.quantity++)
     return item.quantity +1
  } 

  removeQuantity(item: {quantity: number; }) : number {
    if(item.quantity === 0) {
      return 0
    } else {
      return item.quantity--
    }
    
  }
}
