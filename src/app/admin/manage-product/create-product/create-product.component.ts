import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManageProductService} from "../manage-product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  createProductForm = new FormGroup({
    productId: new FormControl('', [
      Validators.required,
    ]),
    productName: new FormControl('', [
      Validators.required,
    ]),
    productNumber: new FormControl(0, [
      Validators.required,
    ]),
    productStatus: new FormControl(0, [
      Validators.required,
    ]),
    productCategory: new FormControl('', [
      Validators.required,
    ]),
    productSupplier: new FormControl('', [
      Validators.required,
    ]),
    productPrice: new FormControl('', [
      Validators.required,
    ]),
    productDiscount: new FormControl('', [
      Validators.required,
    ]),
    productImg: new FormControl('', [
      Validators.required,
    ]),
    productDescription: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ManageProductService
  ) {
  }

  onCreateProduct(): void {
    this.api.addProduct({
      name: this.createProductForm.get('productName')?.value,
      price: this.createProductForm.get('productId')?.value,
      type: this.createProductForm.get('productCategory')?.value,
      discount: this.createProductForm.get('productDiscount')?.value,
      description: this.createProductForm.get('productDescription')?.value,
      // size: [
      //   1,
      //   2
      // ],
      images: [
        this.createProductForm.get('productImg')?.value,
      ],
      material: this.createProductForm.get('productId')?.value,
      guarantee: this.createProductForm.get('productId')?.value,
    }).subscribe(res => {
      if(res) {
        console.log(res)
      }
    })
    this.dialogRef.close();
  }
}
