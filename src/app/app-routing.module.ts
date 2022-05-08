import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './feature-modules/list-products/list-products.component';

const routes: Routes = [ { path: 'products', component: ListProductsComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' },
{ path: '**', redirectTo: '/products' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
