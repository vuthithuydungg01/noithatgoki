import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './manage-user/create-user/create-user.component';
import {  NgChartsModule } from 'ng2-charts';
import { CreateProductComponent } from './manage-product/create-product/create-product.component';
import { CreateProjectComponent } from './manage-project/create-project/create-project.component';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminComponent,
    ManageProductComponent,
    ManageUserComponent,
    ManageOrderComponent,
    ManageProjectComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    DashboardComponent,
    CreateUserComponent,
    CreateProductComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    NgChartsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
