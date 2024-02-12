import { Component, OnInit } from '@angular/core';
import { IPet } from '../catalog/pet.model';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})



export class CartComponent implements OnInit{


  private cart: IPet[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      
      return prev + next.pricePerDay;
    }, 0);
  }

  removeFromCart(pet: IPet) {
    this.cartService.remove(pet);
  }

  getImageUrl(pet: IPet) {
    if (!pet) return '';
    return '/assets/images/' + pet.imageName;
  }

}
