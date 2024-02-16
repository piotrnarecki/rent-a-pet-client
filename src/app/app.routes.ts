import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: "Home - Rent-a-Pet" },
    { path: 'catalog', component: CatalogComponent, title: "Cat-a-log - Rent-a-Pet" },
    { path: 'cart', component: CartComponent, title: "Cart - Rent-a-Pet" },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];