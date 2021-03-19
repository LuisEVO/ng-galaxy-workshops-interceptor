import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAll()
    .subscribe(
      (res) => this.products = res
    );
  }


  getDetail(productId: number): void {
    this.productsService.getOne(productId)
    .subscribe(
      (res) => console.log(res)
    )
  }


}
