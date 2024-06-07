import { Component } from '@angular/core';
import { BotComponent } from '../../icons/bot/bot.component';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [BotComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {}
