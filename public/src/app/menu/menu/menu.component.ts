import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appetizers:any = [
    {
      name:'Arugula Mushroom Salad',
      desc:'Delicious mushroom with arugula leaves, carrots, and the dressing of your choice',
      img:'./../../../assets/arugula-mushroom-salad.webp'
    },
    {
      name:'Fruit Salad',
      desc:'Bowl of a variety of fruit',
      img:'./../../../assets/fruit-salad.jpg'
    },
    {
      name:'Garden Salad',
      desc:'Bowl of a variety of fruit',
      img:'./../../../assets/garden-salad.jpg'
    },
    {
      name:'House Salad',
      desc:'Basic Salad with dressing of your choice',
      img:'./../../../assets/house-salad.jpg'
    },
    {
      name:'Veggie Skewers',
      desc:'Skewers with a variety of Veggies',
      img:'./../../../assets/veggie-skewers.webp'
    },
    {
      name:'Stuffed Avocados',
      desc:'Avocados stuffed with the good stuff no one can turn down',
      img:'./../../../assets/stuffed-avocado.jpg'
    },
  ]

  main:any = [
    {
      name:'Bacon Burger',
      desc:'Grilled Bacon Burger with Dynamite Sauce',
      img:'./../../../assets/bacon-burger.jpg'
    },
    {
      name:'Just a Burger',
      desc:'Grilled Burger cooked to perfection',
      img:'./../../../assets/burger.jpg'
    },
    {
      name:'Chicken Slaw Sandwich',
      desc:'Fried Chicken Sandwich with coleslaw',
      img:'./../../../assets/chicken-slaw-sandwich.webp'
    },
    {
      name:'Sesame Burger',
      desc:'Sesame Burger with Dynamite Sauce',
      img:'./../../../assets/sesame-burger.jpg'
    },
    {
      name:'Spaghetti',
      desc:'spaghetti with sauce',
      img:'./../../../assets/spaghetti-660748_1280.jpg'
    },
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

  deserts:any = [
    {
      name:'Chocolate Cake',
      desc:'Moist Chocolate Cake',
      img:'./../../../assets/chocolate-cake.jpg'
    },
    {
      name:'Strawberry Cake',
      desc:'Moist Strawberry Cake',
      img:'./../../../assets/strawberry-cake.jpg'
    },
    {
      name:'Tiramisu Cake',
      desc:"Delicious fresh made Tiramisu",
      img:'./../../../assets/coffee-cake.webp'
    },

    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
