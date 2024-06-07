import { Component } from '@angular/core';
import { DotComponent } from '../../../icons/dot/dot.component';
import { ChevronLeftComponent } from '../../../icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from '../../../icons/chevron-right/chevron-right.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    DotComponent,
    ChevronLeftComponent,
    ChevronRightComponent,
    CommonModule,
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  currentIndex = 0;
  slides = [
    {
      image: '/assets/images/new-1.jpg',
      title: 'Transformando el Futuro',
      description: `Explorando los últimos avances en el campo de la Inteligencia Artificial, los científicos han desarrollado un nuevo algoritmo de aprendizaje profundo que promete revolucionar la forma en que interactuamos con la tecnología. Este algoritmo, inspirado en los mecanismos de aprendizaje del cerebro humano, permite a las máquinas comprender y aprender de manera más rápida y eficiente que nunca antes. Desde aplicaciones médicas hasta sistemas de transporte autónomo, este descubrimiento tiene el potencial de impulsar avances significativos en una amplia gama de industrias, allanando el camino hacia un futuro impulsado por la IA. ¡Descubre cómo esta innovación está dando forma al mañana!`,
    },
    {
      image: '/assets/images/new-2.jpg',
      title: 'Buscando Soluciones Sostenibles',
      description: `Con la población mundial alcanzando cifras sin precedentes, los expertos advierten sobre los desafíos crecientes que enfrentamos debido a la sobrepoblación. Desde la presión sobre los recursos naturales hasta el aumento de la demanda de alimentos y viviendas, el impacto de la superpoblación se hace sentir en todo el mundo. Sin embargo, en medio de estos desafíos, también emergen oportunidades para innovar y encontrar soluciones sostenibles. Desde programas de planificación familiar hasta tecnologías agrícolas avanzadas y políticas de desarrollo urbano, hay un impulso global para abordar este problema desde múltiples frentes. Únete a nosotros mientras exploramos las implicaciones de la sobrepoblación y las estrategias para construir un futuro más equilibrado y próspero para todos.`,
    },

    {
      image: '/assets/images/new-3.jpg',
      title: 'Sociedad Moderna',
      description: `En la era digital en constante evolución, la tecnología continúa desempeñando un papel central en la transformación de nuestra sociedad. Desde avances en inteligencia artificial y realidad aumentada hasta la proliferación de dispositivos inteligentes y la conectividad 5G, el panorama tecnológico está experimentando cambios rápidos y disruptivos. Estos avances no solo están remodelando la forma en que vivimos y trabajamos, sino que también están dando forma a nuevas industrias y oportunidades económicas. Sin embargo, a medida que abrazamos el potencial ilimitado de la tecnología, también surgen preguntas sobre la ética, la privacidad y la equidad. Únete a nosotros mientras exploramos el emocionante futuro de la tecnología y sus implicaciones para la sociedad moderna.`,
    },
  ];

  changeSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
