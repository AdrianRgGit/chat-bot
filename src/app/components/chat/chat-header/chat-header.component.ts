import { Component } from '@angular/core';
import { BurgerComponent } from '../../icons/burger/burger.component';
import { MinimizeComponent } from '../../icons/minimize/minimize.component';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [BurgerComponent, MinimizeComponent],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {

}
