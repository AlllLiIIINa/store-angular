import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  newProduct = { name: '', price: 0, discounted: false };

  @Output() productAdded = new EventEmitter<any>();

  addProduct() {
    console.log('Adding new product:', this.newProduct);
    this.productAdded.emit(this.newProduct);
    this.newProduct = { name: '', price: 0, discounted: false };
  }
}
