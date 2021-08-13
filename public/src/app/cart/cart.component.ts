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
      id:4,
      name:'Tomato Soup',
      desc:'Freshly made and not from a can we promise',
      img:'./../../../assets/tomato-soup.jpg',
      price: 7.00,
      quantity:1
    },
    {
      id:5,
      name:'Potatoe Soup',
      desc:'Fresh made Potatoe Soup',
      img:'./../../../assets/potatoe-soup.jpg',
      price: 7.00,
      quantity:1
    },
  ]


  cart:any = [
    {
      id:1,
      name:'Bacon Burger',
      desc:'Grilled Bacon Burger with Dynamite Sauce',
      img:'./../../../assets/bacon-burger.jpg',
      price: 10.00,
      quantity:1
    },
    {
      id:2,
      name:'Stuffed Avocados',
      desc:'Avocados stuffed with the good stuff no one can turn down',
      img:'./../../../assets/stuffed-avocado.jpg',
      price: 7.00,
      quantity:1
    },
    {
      id:3,
      name:'Tiramisu Cake',
      desc:"Delicious fresh made Tiramisu",
      img:'./../../../assets/coffee-cake.webp',
      price: 5.00,
      quantity:1
    },
  ]


  onRemove(itemId:number){
    for(var i=0; i< this.cart.length; i++){
      if(this.cart[i].id === itemId){
        if(this.cart[i].quantity <= 1){
          let temp = this.cart[i];
          let itemToBeDeleted = this.cart[i];
          let lastItem = this.cart[this.cart.length-1];
          this.cart[i] = lastItem;
          this.cart[this.cart.length-1] = temp;
          this.cart.pop()
          if(itemToBeDeleted.id == 4 || itemToBeDeleted.id == 5){
            this.addExtras.push(itemToBeDeleted)
          }else{
            break
          }
        } else{
          this.cart[i].quantity -= 1
        }
      }
    }
  }

  onAdd(itemId:number){
    for(var i=0; i< this.cart.length; i++){
      if(this.cart[i].id === itemId){
        this.cart[i].quantity += 1;
      }
    }
  }


  onAddExtra(itemId:number){
    for(var i=0; i< this.addExtras.length; i++){
        if(this.addExtras[i].id === itemId){
          this.cart.push(this.addExtras[i])

          let temp = this.addExtras[i];
          let itemToBeDeleted = this.addExtras[i];
          let lastItem = this.addExtras[this.addExtras.length-1];
          this.addExtras[i] = lastItem;
          this.addExtras[this.addExtras.length-1] = temp;
          this.addExtras.pop()
          break
      }
    }
  }


  cartSubtotal():number{
    var total:number = 0;
    for(var i=0; i < this.cart.length; i++){
      let itemtotal = this.cart[i].quantity * this.cart[i].price; 
      total += itemtotal;
    }
    return total;
  }

  tax(total:number):string{
    let num = total * .0825;
    return num.toFixed(2);
  }

  tip(total:number):string{
    let num = total * .1;
    return num.toFixed(2);
  }

  cartTotal(num1:any,num2:any,num3:any):string{
    num2 = parseFloat(num2)
    num3 = parseFloat(num3)
    let total = num1+num2+num3;
    return total;
  }



}
