import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products!: Product[];
  displayedColumns = ['id', 'name', 'price'];
  constructor(private productservice: ProductserviceService) { }

  ngOnInit(): void {
    this.productservice.read().subscribe(products => {
      this.products = products
      console.log(products)
    }
  )}
}
