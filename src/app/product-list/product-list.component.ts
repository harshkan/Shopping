import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../productInterface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

selectedCategory:string='Fashion';

products: IProduct[];

cartProducts:IProduct[];

cardimageWidth:number=100;
cardimageHeight:number=100;

ProductExistInCart(product):boolean{
  for(let pro of this.cartProducts){
    if(pro.productId == product.productId){
      return true;
    }
  }
}

  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
     this.getProducts();
     this.getSelectedCatogery();
     this.getCartData();
  }

  
getCartData(){
    this.productService.allCartProduct.subscribe(data => this.cartProducts=data);
}

removeProductFromCart(product:IProduct){
    this.productService.removeProductFromCart(product);   
}

  getSelectedCatogery():void{
       console.log("getSelected catogery called Called..."+this.productService.getCategory());
    this.selectedCategory=this.productService.getCategory();
      console.log("xxxxxxx.."+this.selectedCategory);
  }
 
 getProducts(): void{
      console.log("getProducts Called...");
      this.productService.getProductsJsonArray().subscribe(product => this.products = product);
  }
  setSelectedCatogery(catogery){
      this.productService.setCategory(catogery);
      console.log("category set "+catogery);
         this.getSelectedCatogery();
  }

  // addToCart(product:IProduct){
  //     let data = localStorage.getItem('productInCart');
  //     if(data !== null){
  //       this.cartProducts = JSON.parse(data);
  //     }

  //   this.cartProducts.push(product);
  //   localStorage.setItem("productInCart",JSON.stringify(this.cartProducts));
  //   alert("Your item is added to cart");
  // }
  addToCart(product:IProduct){
    this.productService.addProductToCart(product);
     alert("Your item is added to cart");
  }

}
