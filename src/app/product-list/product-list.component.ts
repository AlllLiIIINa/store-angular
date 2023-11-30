import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Output() productSelected = new EventEmitter<any>();

  products = [
    { name: 'Laptop', price: 1000, discounted: false },
    { name: 'Smartphone', price: 500, discounted: true },
  ];

  showProductDetails(product: any) {
    this.productSelected.emit(product);
  }
}
