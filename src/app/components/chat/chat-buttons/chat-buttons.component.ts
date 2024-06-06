import { Component, Output, EventEmitter } from '@angular/core';
import { ChevronLeftComponent } from '../../icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from '../../icons/chevron-right/chevron-right.component';

@Component({
  selector: 'app-chat-buttons',
  standalone: true,
  imports: [ChevronLeftComponent, ChevronRightComponent],
  templateUrl: './chat-buttons.component.html',
  styleUrls: ['./chat-buttons.component.css'],
})
export class ChatButtonsComponent {
  @Output() promptButtonSent = new EventEmitter<string>();

  sendButtonPrompt(prompt: string) {
    this.promptButtonSent.emit(prompt);
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
