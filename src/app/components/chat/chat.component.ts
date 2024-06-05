import { Component } from '@angular/core';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatButtonsComponent } from './chat-buttons/chat-buttons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatInputComponent,
    ChatButtonsComponent,
    CommonModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  prompts: string[] = [];

  handleSendPrompt(event: any) {
    // NOTE: He de convertir aquí event a string ya que no me deja mandarlo directamente en string con los botones
    const prompt = event as string;
    this.prompts.push(prompt);
  }

  clearChat() {
    this.prompts = [];
  }
}
