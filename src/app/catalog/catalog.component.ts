import { Component, OnInit } from '@angular/core';

import { IPet } from './pet.model';
import { CommonModule } from '@angular/common';

import { PetService } from './pet.service';



@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {


  pets: any;
  filter: string = '';

  cart: IPet[] = [];


  // constructor() {


  //   this.pets =[

  //     {
  //       id: 1,
  //       name: "Surfer",
  //       type: "dog",
  //       breed: "Golden Retriver",
  //       pricePerDay: 100.0,
  //       imageName: "golden_retriver.jpeg",
  //     },

  //     {
  //       id: 2,
  //       name: "Major",
  //       type: "dog",
  //       breed: "Schnauzer",
  //       pricePerDay: 90.0,
  //       imageName: "schnauzer.jpeg",
  //     },

  //     {
  //       id: 3,
  //       name: "Beag",
  //       type: "dog",
  //       breed: "Beagle",
  //       pricePerDay: 90.0,
  //       imageName: "beagle.jpeg",
  //     },

  //     {
  //       id: 4,
  //       name: "Smartie",
  //       type: "dog",
  //       breed: "Border Collie",
  //       pricePerDay: 160.0,
  //       imageName: "border_collie.jpeg",
  //     },


  //     {
  //       id: 5,
  //       name: "Schroedinger",
  //       type: "cat",
  //       breed: "American Shorthair",
  //       pricePerDay: 90.0,
  //       imageName: "american_shorthair_cat.jpeg",
  //     },

  //     {
  //       id: 6,
  //       name: "Garfield",
  //       type: "cat",
  //       breed: "Orange Tabby",
  //       pricePerDay: 110.0,
  //       imageName: "orange_tabby_cat.jpeg",
  //     },

  //     {
  //       id: 7,
  //       name: "Laura",
  //       type: "cat",
  //       breed: "Scottish Fold",
  //       pricePerDay: 100.0,
  //       imageName: "scottish_fold_cat.jpeg",
  //     },
  //     {
  //       id: 8,
  //       name: "Gandalf",
  //       type: "cat",
  //       breed: "European Shorthair",
  //       pricePerDay: 140.0,
  //       imageName: "european_cat.jpeg",
  //     },
  //     {
  //       id: 9,
  //       name: "Zbigniew",
  //       type: "exotic",
  //       breed: "Pangular",
  //       pricePerDay: 42.0,
  //       imageName: "pangular.jpeg",
  //     },
  //     {
  //       id: 10,
  //       name: "Linus",
  //       type: "exotic",
  //       breed: "Linux",
  //       pricePerDay: 210.0,
  //       imageName: "penguin.jpeg",
  //     },
  //     {
  //       id:11,
  //       name: "Rider",
  //       type: "exotic",
  //       breed: "Beaver",
  //       pricePerDay: 42.0,
  //       imageName: "beaver.jpeg",
  //     },
  //     {
  //       id: 12,
  //       name: "Guido",
  //       type: "exotic",
  //       breed: "Python",
  //       pricePerDay: 42.0,
  //       imageName: "python.jpeg",
  //     }





  //   ] };

  constructor(
    //private cartSvc: CartService,
    private petService: PetService
  ) { }

    ngOnInit() {
      this.petService.getPets().subscribe((pets) => {
        this.pets = pets;
      });
    }


    getImageUrl(pet: IPet) {
      if (!pet) return '';
      return '/assets/images/' + pet.imageName;
    }
  
    getFilteredPets() {
      return this.filter === ''
        ? this.pets
        : this.pets.filter((pet: any) => pet.type === this.filter);
    }


    addToCart(pet: IPet) {
      this.cart.push(pet);
      console.log(`pet ${pet.name} added to cart`);
    }

}
