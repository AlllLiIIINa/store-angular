import { DiscountDirective } from './discount.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('DiscountDirective', () => {
  it('should create an instance', () => {
    const elMock: ElementRef = {} as ElementRef<any>;
    const rendererMock: Renderer2 = {} as Renderer2;

    const directive = new DiscountDirective(elMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
