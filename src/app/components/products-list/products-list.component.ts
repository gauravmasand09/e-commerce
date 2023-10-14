import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{
  products:Product[] = []
  constructor(private productSVC:ProductService){}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productSVC.getProductsList().subscribe(
      data => { this.products = data }
    )
  }


}
