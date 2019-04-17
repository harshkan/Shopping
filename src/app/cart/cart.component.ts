import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../productInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

cartProducts:IProduct[];
userTotalBill:number;
cartEmpty:boolean=true;

imageWidth:number=100;
imageMargin:number=10;

constructor(private productService: ProductService,private router : Router) { }

ngOnInit() {
 this.getCartData();
 console.log(this.cartProducts);
}

getCartData(){
    this.productService.allCartProduct.subscribe(data => this.cartProducts=data);
    this.calculateBill();
}

removeProductFromCart(product:IProduct){
    this.productService.removeProductFromCart(product);   
    this.calculateBill();
}

calculateBill():void{
  this.productService.getBill().subscribe(data=>this.userTotalBill=data);
  if(this.cartProducts.length != 0){
      this.cartEmpty=false;
  }
  else{
      this.cartEmpty=true;
  }
}

payBill():void{
    alert("bill paind");
    this.productService.resetUserData();
    // this.getCartData();
    this.calculateBill();
    alert("thankyou");
    this.router.navigate(['/home']);
}

// getCartData(){
//      let data=localStorage.getItem('productInCart');
//      if(data !== null){
//          this.cartProducts = JSON.parse(data);
//          this.calculateBill();
//          this.cartEmpty=false;
//      }
//      else{
//          this.cartEmpty=true;
//          alert("cart is empty");
//      }
//  }

//  payBill():void{
//      alert("Your order is recived");
//      this.clearCart();
//     this.router.navigate(['/home']);

//  }

//   clearCart():void{
//     localStorage.clear();
//      this.cartProducts = [];
//      this.userTotalBill=0;
//    // this.getCartData();
//   }

//   calculateBill():void{
//       for(let product of this.cartProducts){
//           let x=
//         this.userTotalBill += product.productPrice;
//       }
//   }

}
