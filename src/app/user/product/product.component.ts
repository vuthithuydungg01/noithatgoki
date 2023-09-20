import { Component, OnInit } from '@angular/core';
import { ApiProcessService } from '../api-process/api-process.service';
import {  Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  listProduct: any = {
    combo: [],
    livingRoom: [],
    bedRoom: [],
    kitchenRoom: [],
    office: [],
    decorations: [],
    table: [],
    char: [],
  };
  typeProduct = ['combo', 'livingRoom', 'bedRoom', 'kitchenRoom', 'office', 'decorations', 'table', 'char'];
  constructor(private api: ApiProcessService,
    private router: Router,
    // private route: Route,
    ) { }
  ngOnInit(): void {
    this.typeProduct.map((type, index) => {
      this.api.getProduct(1, 5, index).subscribe((res) => {
        Object.keys(this.listProduct).forEach(key => {
          if (type === key) {
            this.listProduct[key].push(...res);
          }
        })
      });
    });
  }

  getProductDetail(id: string): void {
    console.log(id);
    this.router.navigate([`${window.location.href}/product-detail`]);
    this.api.getProductDetail(+id).subscribe(res => {
      console.log(res);

    })

  }

  addProduct(event: any): void {
    console.log(event);

  }

}
