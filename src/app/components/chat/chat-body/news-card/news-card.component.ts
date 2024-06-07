import { Component } from '@angular/core';
import { DotComponent } from '../../../icons/dot/dot.component';
import { ChevronLeftComponent } from '../../../icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from '../../../icons/chevron-right/chevron-right.component';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [DotComponent, ChevronLeftComponent, ChevronRightComponent],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {}
