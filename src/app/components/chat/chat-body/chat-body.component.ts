import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ChatBodyComponent implements OnChanges {
  @Input() chatEntries: ChatEntry[] = [];
  @Input() slides: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['slides']) {
      console.log('Slides received:', this.slides);
    }
  }
}
