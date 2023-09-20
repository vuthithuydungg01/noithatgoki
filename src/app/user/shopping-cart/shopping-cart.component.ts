import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
constructor(private api: ShoppingCartService,){

}

ngOnInit(): void {
    this.api.getCart(1, 10).subscribe(res => {
      console.log(res);

    })
}
}
