import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NewsCardComponent } from './news-card/news-card.component';

interface ChatEntry {
  prompt: string;
  response: string;
}

@Component({
  selector: 'app-chat-body',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css'],
})
export class ChatBodyComponent {
  @Input() chatEntries: ChatEntry[] = [];
  @Input() slides: any[] = [];
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    }
  }
}
