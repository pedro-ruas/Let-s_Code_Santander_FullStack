import { ProductCatalogService } from './../shared/product-catalog.service';
import { ShoppingService } from './../shopping.service';
import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

 products: Product[] = this.productCatalogService.products

 productsToDisplay: number = Math.min(this.products.length, 4)
                    
  constructor(private shoppingService: ShoppingService,
              private productCatalogService: ProductCatalogService) { }

  addToCart(product: Product){
    this.shoppingService.addToCart(product)
  }

  ngOnInit(): void {
  }

}
