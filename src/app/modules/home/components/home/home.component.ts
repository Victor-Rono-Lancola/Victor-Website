import { FAQData } from './../../../../shared/data/FAQ.data';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { testimonialsData } from 'src/app/shared/data/testimonials.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('faqContent') faqContent: ElementRef | null = null;
  testimonials = testimonialsData;
  FAQ = FAQData;


  ngAfterViewInit() {
    this.toggleFAQ();
  }

  openLink(link: string) {
    const url = 'https://' + link;
    window.open(url, '_blank');
  }

  toggleFAQ() {
    this.faqContent?.nativeElement.addEventListener('click', (event: Event) => {

      const groupHeader = (event.target as HTMLElement)?.closest('.faq-group-header');
      const group = groupHeader?.parentElement;
      const groupBody = group?.querySelector('.faq-group-body');
      const icon = groupHeader?.querySelector('.icon');

      // toggle icon
      icon?.classList.toggle('fa-plus');
      icon?.classList.toggle('fa-minus');

      // toggle body
      groupBody?.classList.toggle('open');

    })


  }
}
