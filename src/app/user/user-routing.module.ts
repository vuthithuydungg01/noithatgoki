import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {
            path: 'product-detail',
            component: ProductDetailComponent
          }]
      },
      {
        path: 'project',
        component: ProjectComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
 }
