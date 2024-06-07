import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ChatComponent } from './chat.component';
import { ChatBotService } from '../../services/chatBot/chat-bot.service';


describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let openaiService: ChatBotService; // Declaración del servicio

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [HttpClientModule],
      providers: [ChatBotService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    openaiService = TestBed.inject(ChatBotService); // Obtener la instancia del servicio
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a chat entry when getBotResponse is called', () => {
    const userPrompt = 'Test prompt';
    const mockBotResponse = 'Mock bot response';
    spyOn(openaiService, 'sendMessage').and.returnValue(
      of({
        choices: [{ text: mockBotResponse }],
      }),
    );

    component.getBotResponse(userPrompt);

    expect(component.chatEntries.length).toBe(1);
    expect(component.chatEntries[0].prompt).toBe(userPrompt);
    expect(component.chatEntries[0].response).toBe(mockBotResponse);
  });

  it('should handle error when getBotResponse fails', () => {
    const userPrompt = 'Test prompt';
    spyOn(openaiService, 'sendMessage').and.returnValue(
      throwError('Test error'),
    );

    component.getBotResponse(userPrompt);

    expect(component.chatEntries.length).toBe(1);
    expect(component.chatEntries[0].prompt).toBe(userPrompt);
    expect(component.chatEntries[0].response).toBe(
      'Ocurrió un error al obtener la respuesta del bot.',
    );
  });

  it('should clear chat entries when clearChat is called', () => {
    component.chatEntries = [{ prompt: 'prompt1', response: 'response1' }];
    component.clearChat();
    expect(component.chatEntries.length).toBe(0);
  });

  it('should toggle chat view when toggleChatView is called', () => {
    component.showChat = false;
    component.toggleChatView();
    expect(component.showChat).toBe(true);

    component.toggleChatView();
    expect(component.showChat).toBe(false);
  });
});
