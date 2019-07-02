//system modules!
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from "@angular/router";

//Application Modules!
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Product1Component } from "./product1.component";
// import {Product1Routes} from "./product1.routes";
import { Product1ViewComponent } from "./product1view.component";

const Product1Routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: Product1Component,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: '',
        // pathMatch: 'full',
        component: Product1ViewComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    Product1Component,
    Product1ViewComponent
  ],
  imports: [
    RouterModule.forChild(Product1Routes),
    // HttpModule,
    SharedModule.forRoot()
  ],
  exports: [RouterModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  // bootstrap: [Product1Component]
})
export class Product1Module { }
