import { Component } from '@angular/core';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatButtonsComponent } from './chat-buttons/chat-buttons.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ChatBotService } from '../../services/chatBot/chat-bot.service';
import { ChatEntry } from '../../types/types';

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
  slides: any[] = [];
  showChat: boolean = false;

  constructor(private openaiService: ChatBotService) {}

  // NOTE: Recibimos el prompt del usuario y se lo pasamos al servicio de openai. Si la comunicación es correcta no daría una respuesta, si no, entraría el error.
  // NOTE: También, juntamos en una misma array la pregunta y la respuesta para que vayan en parejas y poder pintarlas a la vez.
  // NOTE: Se debería de poner un spinner o un cargando a la hora de recibir la respuesta ya que no es instantánea.
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

  // NOTE: Recibimos el input del componente chat-input, lo convertimos a string y llamamos a la función de getBotResponse para recibir una respuesta sobre ese prompt
  handleSendPrompt(event: any) {
    const prompt = event as string;
    this.getBotResponse(prompt);
  }

  // NOTE: Vaciamos las arrays de los mensajes.
  clearChat() {
    this.chatEntries = [];
    this.slides = [];
  }

  // NOTE: Mostramos o no el chat
  toggleChatView() {
    this.showChat = !this.showChat;
  }

  // NOTE: Recibimos los slides del componente chat-button
  receiveSlides(slides: any[]) {
    this.slides = slides;
  }
}
