import {Component, OnDestroy, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ApiProcessService} from '../api-process/api-process.service';
import {Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  listProduct: any = {
    combo: [],
    livingRoom: [],
    bedRoom: [],
    kitchenRoom: [],
    office: [],
    decorations: [],
    table: [],
    char: [],
  };
  typeProduct = ['combo', 'livingRoom', 'bedRoom', 'kitchenRoom', 'office', 'decorations', 'table', 'char'];
  searchTerms = new Subject<string>();
  searchSubscription: Subscription = new Subscription();
  @ViewChild('myInput', {static: true}) myInput: ElementRef | undefined;

  constructor(private api: ApiProcessService,
              private router: Router,
              // private route: Route,
  ) {
  }

  ngOnInit(): void {
    this.getProduct();

    this.searchSubscription = this.searchTerms
      .pipe(
        debounceTime(1000), // Chờ 1 giây sau khi người dùng ngừng nhập
        distinctUntilChanged(), // Chỉ gửi yêu cầu mới nếu giá trị thay đổi
        switchMap((term: string) => this.api.getProduct({page: 1, limit: 20, key: term}))
      )
      .subscribe((results) => {
        this.listProduct = results;
      });
  }

  getProduct(): void {
    this.typeProduct.map((type, index) => {
      this.api.getProduct({page: 1, limit: 20, type: index}).subscribe((res) => {
        Object.keys(this.listProduct).forEach(key => {
          if (type === key) {
            this.listProduct[key].push(...res.body);
          }
        })
      });
    });
  }

  onSearchProduct(inputValue: any): void {
    this.searchTerms.next(inputValue?.target.value || null);
  }

  clearValue(): void {
    if (this.myInput) {
      this.myInput.nativeElement.value = '';
      this.getProduct();
    }
  }

  getProductDetail(id: string): void {
    console.log(id);
    this.router.navigate([`${window.location.href}/product-detail`]);
    this.api.getProductDetail(+id).subscribe(res => {
      console.log(res);

    })

  }

  addProductToCart(event: any): void {
    console.log(event);

  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
