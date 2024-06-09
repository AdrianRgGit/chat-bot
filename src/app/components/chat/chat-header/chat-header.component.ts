import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { BurgerComponent } from '../../icons/burger/burger.component';
import { MinimizeComponent } from '../../icons/minimize/minimize.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [
    BurgerComponent,
    MinimizeComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css',
})
export class ChatHeaderComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Output() clearChatEvent = new EventEmitter<void>();
  @Output() toggleChatView = new EventEmitter<boolean>();

  // NOTE: Alternar la vista del menú del chat
  handleMenuView() {
    this.trigger.openMenu();
  }

  // NOTE: Ejecutar la función de limpiar chat del padre
  emitClearChat() {
    this.clearChatEvent.emit();
  }

  // NOTE: Ejecutar la función de alternar vista del chat del padre
  toggleChat() {
    this.toggleChatView.emit();
  }
}
