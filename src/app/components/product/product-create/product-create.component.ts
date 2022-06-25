import { Component, OnInit } from "@angular/core";
import { ProductserviceService } from "../productservice.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(
    private productservice: ProductserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productservice.create(this.product).subscribe(() => {
      this.productservice.showMessage("Produto Criado");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
