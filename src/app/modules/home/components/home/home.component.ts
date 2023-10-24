import { FAQData } from './../../../../shared/data/FAQ.data';
import { Component, ViewChild } from '@angular/core';
import { testimonialsData } from 'src/app/shared/data/testimonials.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ViewChild('faqContent');
  testimonials = testimonialsData;
  FAQ = FAQData;


  toggleFAQ() {

  }
}
