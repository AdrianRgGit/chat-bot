import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-buttons',
  standalone: true,
  imports: [],
  templateUrl: './chat-buttons.component.html',
  styleUrls: ['./chat-buttons.component.css'],
})
export class ChatButtonsComponent {
  @Output() promptButtonSent = new EventEmitter<string>();

  sendButtonPrompt(prompt: string) {
    this.promptButtonSent.emit(prompt);
  }
}
