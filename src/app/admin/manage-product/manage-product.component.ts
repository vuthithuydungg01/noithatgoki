import { Component } from '@angular/core';
import { ManageProductService } from './manage-product.service';
import {LoginComponent} from "../../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {CreateProductComponent} from "./create-product/create-product.component";

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent {
  listProducts: any[] = [];
  subscription = new Subscription
  constructor(private api: ManageProductService,
              private dialog: MatDialog) {}
  ngOnInit(): void {
    this.api
      .getProduct({ page: 1, limit: 20 })
      .subscribe((res) => {
        if(res.status === 200) {
          this.listProducts = res.body;
        }
      });
  }
  onCreateProduct(): void {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      panelClass: 'vcs-config-dialog',
      width: '860px',
      data: {

      },
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(status => {
        console.log(status);

      })
    );
  }
  onEdit(id?: string): void {}
  onDelete(id?: string): void {}
}
