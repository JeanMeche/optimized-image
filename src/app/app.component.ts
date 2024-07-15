import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ChildComponent } from './test/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, ChildComponent],
  template: `<img ngSrc="../assets/cat.jpg" priority />

    <app-child />`,
})
export class AppComponent {}
