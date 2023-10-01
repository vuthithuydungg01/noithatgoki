import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {ManageUserService} from "../../admin/manage-user/manage-user.service";
import {ShareDataService} from "../../share-data.service";
import {ToastrService} from "ngx-toastr";
import {ApiProcessService} from "../api-process/api-process.service";
import {Router} from "@angular/router";

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
  productId = 0;

  constructor(private apiShoppingCart: ShoppingCartService,
              private api: ApiProcessService,
              private apiUser: ManageUserService,
              private shareData: ShareDataService,
              public toasterService: ToastrService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getCart();
    this.getUserInfo();
    this.totalMoney = 0;
  }

  getCart(): void {
    this.apiShoppingCart.getCart({}).subscribe(res => {
      this.listProduct = res;
      this.productId = res[0].id;
      res.forEach((i: any) => {
        this.totalProduct += i.amount;
      });
    })
  }

  getUserInfo(): void {
    this.apiUser.getUserId(24).subscribe(res => {
      console.log(res)
      this.product = res.body;
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
    this.apiShoppingCart.deleteProductInCart(id).subscribe(res => {
      this.getCart();
    })

  }

  changeAmount(increase: boolean, productId: any): void {
    if (increase) {
      this.api.addProductToCart({productId: productId}).subscribe(res => {
        if (res) {
          this.toasterService.success('Thêm sản phẩm thành công!');
          this.listProduct.forEach((i: any) => {
            if (i.product.id === productId) {
              i.amount++;
            }
          })
        }
      }, error => {
        console.log(error);
        if (error.error.message === "product_is_empty") {
          this.toasterService.error('Số lượng sản phẩm không đủ!');
        }
      })
    } else {
      //update cart
    }
  }

  realMoneyPrice(price: number, discount?: number): number {
    const value = discount ? price - (price * (discount / 100)) : price;
    return value;
  }

  provisionalMoney(price: number, amount: number): number {
    console.log('a');
    this.totalProvisionalMoney = price * amount;
    return this.totalProvisionalMoney;
  }

  onTotalMoney(): number {
    this.totalMoney += this.totalProvisionalMoney;
    return this.totalMoney;
  }

  addOrder(): void {
    this.router.navigate(['buy-success']);
    /*this.apiShoppingCart.addOrder({}).subscribe(res => {
      if (res) {
        this.toasterService.success('Đặt hàng thành công!');

      }
    }, error => {
      console.log(error)
    })*/
  }

}
