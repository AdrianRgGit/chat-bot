import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { ChatBotService } from './chat-bot.service';

describe('ChatBotService', () => {
  let service: ChatBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Asegurarse de importar HttpClientTestingModule
      providers: [ChatBotService],
    });
    service = TestBed.inject(ChatBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
