// src/app/components/chat/chat.component.ts
import { Component } from '@angular/core';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatButtonsComponent } from './chat-buttons/chat-buttons.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OpenaiService } from '../../services/chatBot/chat-bot.service';

interface ChatEntry {
  prompt: string;
  response: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    HttpClientModule,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatInputComponent,
    ChatButtonsComponent,
    CommonModule,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chatEntries: ChatEntry[] = [];
  showChat: boolean = false;

  constructor(private openaiService: OpenaiService) {}

  getBotResponse(userPrompt: string) {
    const modelName = 'gpt-3.5-turbo';
    this.openaiService.sendMessage(userPrompt, modelName).subscribe(
      (data) => {
        const botResponse = data.choices[0].text.trim();
        this.chatEntries.push({ prompt: userPrompt, response: botResponse });
      },
      (error) => {
        console.error('Error:', error);
        this.chatEntries.push({
          prompt: userPrompt,
          response: 'Ocurrió un error al obtener la respuesta del bot.',
        });
      },
    );
  }

  handleSendPrompt(event: any) {
    const prompt = event as string;
    this.getBotResponse(prompt);
  }

  clearChat() {
    this.chatEntries = [];
  }

  toggleChatView() {
    this.showChat = !this.showChat;
  }
}
