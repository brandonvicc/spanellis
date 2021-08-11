import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addExtras:any = [
    {
      name:'Tomato Soup',
      desc:'Freshly made and not from a can we promise',
      img:'./../../../assets/tomato-soup.jpg'
    },
    {
      name:'Potatoe Soup',
      desc:'Fresh made Potatoe Soup',
      img:'./../../../assets/potatoe-soup.jpg'
    },
  ]


  cart:any = [
    {
      name:'Bacon Burger',
      desc:'Grilled Bacon Burger with Dynamite Sauce',
      img:'./../../../assets/bacon-burger.jpg',
      price: 10.00,
      quantity:1
    },
    {
      name:'Stuffed Avocados',
      desc:'Avocados stuffed with the good stuff no one can turn down',
      img:'./../../../assets/stuffed-avocado.jpg',
      price: 7.00,
      quantity:1
    },
    {
      name:'Tiramisu Cake',
      desc:"Delicious fresh made Tiramisu",
      img:'./../../../assets/coffee-cake.webp',
      price: 5.00,
      quantity:1
    },
  ]
}
