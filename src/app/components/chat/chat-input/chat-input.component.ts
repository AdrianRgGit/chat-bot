import { Component, EventEmitter, Output } from '@angular/core';
import { ArrowComponent } from '../../icons/arrow/arrow.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [ArrowComponent, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {
  @Output() sendPrompt = new EventEmitter<string>();
  newPrompt: string = '';

  // NOTE: Coger la consulta escrita por el usuario y mandarla al padre
  send() {
    if (this.newPrompt.trim()) {
      this.sendPrompt.emit(this.newPrompt);
      this.newPrompt = '';
    }
  }
}
