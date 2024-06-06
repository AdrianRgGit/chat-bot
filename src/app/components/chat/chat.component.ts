import { Component } from '@angular/core';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatButtonsComponent } from './chat-buttons/chat-buttons.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OpenaiService } from '../../services/chat-bot.service';

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
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  prompts: string[] = [];

  constructor(private openaiService: OpenaiService) {}

  getBotResponse(userPrompt: string) {
    const modelName = 'gpt-3.5-turbo';
    this.openaiService.sendMessage(userPrompt, modelName).subscribe(
      (data) => {
        const botResponse = data.choices[0].text.trim();
        this.prompts.push(botResponse);
      },
      (error) => {
        console.error('Error:', error);
        this.prompts.push('Ocurrió un error al obtener la respuesta del bot.');
      },
    );
  }

  handleSendPrompt(event: any) {
    // NOTE: He de convertir aquí event a string ya que no me deja mandarlo directamente en string con los botones
    const prompt = event as string;
    this.prompts.push(prompt);
    this.getBotResponse(prompt);
  }

  clearChat() {
    this.prompts = [];
  }
}
