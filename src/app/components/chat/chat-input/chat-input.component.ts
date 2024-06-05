import { Component } from '@angular/core';
import { ArrowComponent } from '../../icons/arrow/arrow.component';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {}
