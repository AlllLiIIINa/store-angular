import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDiscount]'
})
export class DiscountDirective {
  @Input() set appDiscount(isDiscounted: boolean) {
    if (isDiscounted) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
