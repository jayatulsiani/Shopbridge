import { ProductService } from './../../product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ProductRequest } from 'src/app/product.constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';



@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  public productRequest = new ProductRequest();
  public isEdit = false;
  public isLoading = false;
  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, public productService: ProductService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.dialogData)
    this.isEdit = this.dialogData.edit;
    if (this.dialogData.data && (this.dialogData.data != null || this.dialogData.data != undefined)) {
      this.productRequest = _.cloneDeep(this.dialogData.data);
    }
  }

  addProduct() {
    if (!this.isEdit) {
      this.isLoading = true;
      this.productService.addProduct(this.productRequest)
        .subscribe((res) => {
          if (res) {
            this.isLoading = false;
            this.dialogRef.close(this.productRequest);
            this.snackBar.open("Product Successfully Added", "Success", { duration: 1000 });
          }

        }, () => {
          this.isLoading = false;
        });
    } else {
      this.isLoading = true;
      this.productService.editProduct(this.productRequest, this.productRequest.id.toString())
        .subscribe((res) => {
          if (res) {
            this.isLoading = false;
            this.dialogRef.close(this.productRequest);
            this.snackBar.open("Product Successfully Updated", "Success", { duration: 1000 });
          }

        }, () => {
          this.isLoading = false;
        });
    }

  }

  preventAlphabets(event: { charCode: number; preventDefault: () => void; }) {
    let input = String.fromCharCode(event.charCode);
    const reg = /^-?\d*\.?\d*$/;

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }

}
