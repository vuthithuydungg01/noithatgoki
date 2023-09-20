import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProjectComponent } from './project/project.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PayComponent } from './shopping-cart/pay/pay.component';
// import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailComponent,
    ProjectComponent,
    NewsComponent,
    ContactComponent,
    ShoppingCartComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  // MatDialogModule,
  ]
})
export class UserModule {

}
