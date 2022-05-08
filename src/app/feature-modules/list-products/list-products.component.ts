import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from './../../product.service';
import { AddProductDialogComponent } from './../add-product-dialog/add-product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['Id', 'Name', 'Description', 'Price','edit','delete'];
  public productList = [];
  public dataSource = new MatTableDataSource(this.productList);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(public dialog: MatDialog, public productService: ProductService,public snackBar: MatSnackBar) { }
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
  ngOnInit(): void {

    this.productService.getAllProducts().
    subscribe((res)=>{
      console.log(res)
      this.dataSource = res;
    });
    
  }


  addProducts(data?:any){
    const dialogData = {
      data:data,
      edit: data ? true : false
    }
    this.dialog.open(AddProductDialogComponent,{data: dialogData})
    .afterClosed().subscribe((result)=>{
      if(result){
        console.log(result)
       // this.dataSource.push(result)
        console.log(this.dataSource);
        this.ngOnInit();
      }
    });
  }

  editProduct(data:any){

  }
  deleteProduct(data:any){
    this.productService.deleteProduct(data.id).subscribe(
      (result) => { setTimeout(() => this.ngOnInit(), 1000); this.snackBar.open("Successfully Deleted"); }
    )
  }
}
