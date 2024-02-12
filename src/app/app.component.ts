import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";//dodawanie komponentu
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { CartComponent } from "./cart/cart.component";
import { HttpClientModule } from '@angular/common/http';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HttpClientModule,CommonModule, RouterOutlet, HomeComponent, HeaderComponent, FooterComponent, CatalogComponent,CartComponent]
})
export class AppComponent {
  title = 'rent-a-pet-client';
}
