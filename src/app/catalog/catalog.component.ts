import { Component } from '@angular/core';

import { IPet } from './pet.model';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {


  pets: any;
  filter: string = '';

  constructor() {

console.log("PETS CONSTRUCTOR")

    this.pets =[

      {
        id: 1,
        name: "Surfer",
        type: "dog",
        breed: "Golden Retriver",
        pricePerDay: 100.0,
        imageName: "golden_retriver.jpeg",
      },

      {
        id: 2,
        name: "Major",
        type: "dog",
        breed: "Schnauzer",
        pricePerDay: 90.0,
        imageName: "schnauzer.jpeg",
      },

      {
        id: 3,
        name: "Beag",
        type: "dog",
        breed: "Beagle",
        pricePerDay: 90.0,
        imageName: "beagle.jpeg",
      },

      {
        id: 4,
        name: "Smartie",
        type: "dog",
        breed: "Border Collie",
        pricePerDay: 160.0,
        imageName: "border_collie.jpeg",
      }


    ] };

    getImageUrl(pet: IPet) {
      if (!pet) return '';
      return '/assets/images/' + pet.imageName;
    }
  
    // getFilteredPets() {
    //   return this.filter === ''
    //     ? this.pets
    //     : this.pets.filter((product: any) => pet.type === this.filter);
    // }


    getPets(){

      console.log("GETTING PETS");

      return this.pets;
    }
}
