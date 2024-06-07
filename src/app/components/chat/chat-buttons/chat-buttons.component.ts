import { Component, Output, EventEmitter } from '@angular/core';
import { ChevronLeftComponent } from '../../icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from '../../icons/chevron-right/chevron-right.component';
import { NewsService } from '../../../services/newsService/news-service.service';

@Component({
  selector: 'app-chat-buttons',
  standalone: true,
  imports: [ChevronLeftComponent, ChevronRightComponent],
  templateUrl: './chat-buttons.component.html',
  styleUrls: ['./chat-buttons.component.css'],
})
export class ChatButtonsComponent {
  @Output() promptButtonSent = new EventEmitter<string>();
  @Output() slides = new EventEmitter<any>();

  constructor(private newsService: NewsService) {}

  sendButtonPrompt(prompt: string) {
    if (prompt === 'Últimas noticias') {
      this.promptButtonSent.emit(prompt);
      this.newsService.slides = [
        {
          image: '/assets/images/new-1.jpg',
          title: 'Transformando el Futuro',
          description: `Explorando los últimos avances en el campo de la Inteligencia Artificial...`,
        },
        {
          image: '/assets/images/new-2.jpg',
          title: 'Buscando Soluciones Sostenibles',
          description: `Con la población mundial alcanzando cifras sin precedentes...`,
        },
        {
          image: '/assets/images/new-3.jpg',
          title: 'Sociedad Moderna',
          description: `En la era digital en constante evolución...`,
        },
      ];
      this.slides.emit(this.newsService.slides);
    } else {
      this.promptButtonSent.emit(prompt);
    }
  }

  scrollRight() {
    const container = document.querySelector('.section-container');
    if (container) {
      const scrollAmount = 300;
      const scrollOptions: ScrollToOptions = {
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      };
      container.scrollTo(scrollOptions);
    }
  }

  scrollLeft() {
    const container = document.querySelector('.section-container');
    if (container) {
      const scrollAmount = -300;
      const scrollOptions: ScrollToOptions = {
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      };
      container.scrollTo(scrollOptions);
    }
  }
}
