import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BotResponseComponent } from './bot-response/bot-response.component';

interface ChatEntry {
  prompt: string;
  response: string;
}

@Component({
  selector: 'app-chat-body',
  standalone: true,
  imports: [CommonModule, BotResponseComponent],
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css'],
})
export class ChatBodyComponent {
  @Input() chatEntries: ChatEntry[] = [];
}
