import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {PRODUCTS} from './mock-product-list';
import {IProduct} from './productInterface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

    selectedCategory:string='Electronics';
    cartProducts: IProduct[]=[];
    userTotalBill:number=0;


    cartobj = new BehaviorSubject(this.cartProducts);
    allCartProduct=this.cartobj.asObservable();
    
  
    getBill():Observable<number>{
      this.userTotalBill=0;
      for(let product of this.cartProducts)
      {
          this.userTotalBill+=product.productPrice;
      }
      return of(this.userTotalBill);
    }

    resetUserData(){
      this.userTotalBill=0;
      this.cartProducts=[];
      this.cartobj.next(this.cartProducts);
    }

    removeProductFromCart(product){
      for(let i=0;i<this.cartProducts.length;i++){
        if(this.cartProducts[i].productId === product.productId){
          this.cartProducts.splice(i,1);
        }
      }
    }


    // getAllCartProducts():Observable<IProduct[]>{
    //   return of(this.cartProducts);
    // }

    addProductToCart(product:IProduct){
      this.cartProducts.push(product);
    }

    getCategory(){
        return (this.selectedCategory);
    }
     setCategory(catogery){
     this.selectedCategory=catogery;
    }

    getProductsJsonArray(): Observable<IProduct[]>{
      return of(PRODUCTS);
    }

    // getProduct(id: string): Observable<IProduct>{
    //   return of(PRODUCTS.find(product => product.productId === id));
    // }
}