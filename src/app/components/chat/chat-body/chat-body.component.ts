import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BotResponseComponent } from './bot-response/bot-response.component';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  imports: [CommonModule, BotResponseComponent],
  templateUrl: './chat-body.component.html',
  styleUrl: './chat-body.component.css',
})
export class ChatBodyComponent {
  @Input() prompts: string[] = [];
}
