import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedProduct: any;
  products: any[] = [];

  onProductAdded(product: any) {
    this.products.push(product);
  }
}
