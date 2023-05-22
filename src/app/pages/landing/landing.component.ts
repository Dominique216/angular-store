import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html' 
})
export class LandingComponent implements OnInit, OnDestroy {
  productsSubscription: Subscription | undefined;
  products: Array<Product> | undefined;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts('3')
      .subscribe((_products) => {
        this.products = _products
      })
  }

  ngOnDestroy(): void {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

}
