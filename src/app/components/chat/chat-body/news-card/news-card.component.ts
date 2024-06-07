import { Component, OnInit } from '@angular/core';
import { DotComponent } from '../../../icons/dot/dot.component';
import { ChevronLeftComponent } from '../../../icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from '../../../icons/chevron-right/chevron-right.component';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../../services/newsService/news-service.service';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    DotComponent,
    ChevronLeftComponent,
    ChevronRightComponent,
    CommonModule,
  ],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'], // Cambiado a styleUrls
})
export class NewsCardComponent {
  currentIndex = 0;
  slides: any[] = [];

  constructor(private newsService: NewsService) {
    this.slides = this.newsService.slides;
  }

  changeSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
