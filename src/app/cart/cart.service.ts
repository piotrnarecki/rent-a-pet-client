import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPet } from '../catalog/pet.model';



@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<IPet[]> = new BehaviorSubject<IPet[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<IPet[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  getCart(): Observable<IPet[]> {
    return this.cart.asObservable();
  }

  add(pet: IPet) {
    const newCart = [...this.cart.getValue(), pet];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + pet.name + ' to cart!');
    });
  }

  remove(pet: IPet) {
    let newCart = this.cart.getValue().filter((i) => i !== pet);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + pet.name + ' from cart!');
    });
  }
}