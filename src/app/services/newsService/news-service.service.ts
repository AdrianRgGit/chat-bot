import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // NOTE: Servicio disponible en toda la aplicación
})
export class NewsService {
  slides: any[] = []; // NOTE: Array para almacenar las noticias.

  constructor() {}
}
