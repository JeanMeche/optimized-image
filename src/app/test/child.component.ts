import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgOptimizedImage],
  template: ` <img ngSrc="./../../assets/cat.jpg" priority />`,
})
export class ChildComponent {}
