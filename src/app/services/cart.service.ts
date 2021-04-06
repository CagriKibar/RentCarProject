import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { cartItems } from '../models/carItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = cartItems.find(c=>c.car.carId===car.carId);

    if(item){
      item.quantity+=1;
    }else{
      let cartItem=new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
        cartItems.push(cartItem)
    }
  }
  removeFromCart(car:Car){
    let item = cartItems.find(c=>c.car.carId===car.carId);
    cartItems.splice(cartItems.indexOf(item),1)
  }

  list():CartItem[]{
    return cartItems;
  }
}
