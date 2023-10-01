import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ManageUserService} from "../manage-user/manage-user.service";
import {ManageProductService} from "../manage-product/manage-product.service";

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.scss']
})
export class PopupDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiUser: ManageUserService,
    private apiProduct: ManageProductService,
  ) {}

  onConfirmClick(): void {
    console.log(this.data)
    if(window.location.href.includes('manage-user')) {
      this.apiUser.deleteUser(this.data.id).subscribe(res => {
        if(res) {
          this.dialogRef.close(true);
        }
      })
    } else {
      this.apiProduct.deleteProduct(this.data.id).subscribe(res => {
        if(res) {
          this.dialogRef.close(true);
        }
      })
    }

  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}
