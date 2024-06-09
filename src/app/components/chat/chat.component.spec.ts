import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatButtonsComponent } from './chat-buttons/chat-buttons.component';
import { CommonModule } from '@angular/common';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ChatHeaderComponent,
        ChatBodyComponent,
        ChatInputComponent,
        ChatButtonsComponent,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
