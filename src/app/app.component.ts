import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ NgOptimizedImage ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'codecv';

  ngAfterViewInit() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example3',
      offset: 0,
      smoothScroll: true
    });
  }
}
