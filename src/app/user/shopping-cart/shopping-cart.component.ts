import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {log10} from "chart.js/helpers";
import {ManageUserService} from "../../admin/manage-user/manage-user.service";
import {ShareDataService} from "../../share-data.service";
import {ToastrService} from "ngx-toastr";
import {ApiProcessService} from "../api-process/api-process.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  listProduct: any = [];
  totalProduct = 0;
  totalMoney = 0;
  totalProvisionalMoney = 0;
  product: any;

  constructor(private apiShoppingCart: ShoppingCartService,
              private api: ApiProcessService,
              private apiUser: ManageUserService,
              private shareData: ShareDataService,
              public toasterService: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.apiShoppingCart.getCart({}).subscribe(res => {
      this.listProduct = res;
      res.forEach((i: any) => {
        this.totalProduct += i.amount;
      });
    })

    console.log(this.shareData.getSharedData())

    this.apiUser.getUser({}).subscribe(res => {
      console.log(res.body.listUser)
      this.product = res.body.listUser.filter((i:any) => i.id === this.listProduct[0].id);
      console.log(this.product)
      // this.editProductForm.patchValue({
      //   productName: this.product?.name ,
      //   productAmount: this.product.amount,
      //   productCategory: this.product.category,
      //   productMaterial: this.product.material,
      //   productDiscount: this.product.discount,
      //   productPrice: this.product.price,
      //   productDescription: this.product.description,
      // });
    })
  }

  deleteInCart(id: number): void {
    console.log(id)
    this.apiShoppingCart.deleteProductInCart(id).subscribe(res => {
      console.log(res)
    })
  }

  changeAmount(increase: boolean, productId: any): void {
    if(increase) {
      this.api.addProductToCart({productId: productId}).subscribe(res => {
        if (res) {
          // this.toasterService.success('Thêm sản phẩm thành công!');
         this.listProduct.forEach((i:any) => {
           if(i.product.id === productId) {
             i.amount++;
           }
         })
        }
      }, error => {
        console.log(error);
        if(error.error.message === "product_is_empty") {
          this.toasterService.error('Số lượng sản phẩm không đủ!');
        }
      })
    } else {

    }
  }

  provisionalMoney(price: number, amount: number): number{
    this.totalProvisionalMoney = price * amount;
    this.totalMoney += this.totalProvisionalMoney;
    return this.totalProvisionalMoney;
  }

  addOrder() : void {
    this.apiShoppingCart.addOrder({}).subscribe(res => {
      if (res) {
        this.toasterService.success('Đặt hàng thành công!');

      }
    }, error => {
      console.log(error)
    })
  }
}
