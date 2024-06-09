import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: HttpClientModule, // NOTE: Proporciona este servicio en el módulo HttpClientModule
})
export class ChatBotService {
  private apiUrl = 'https://api.openai.com/v1/engines/'; // NOTE: URL base de la API de OpenAI
  private apiKey = environment.apiKey; // NOTE: Clave de API almacenada en las variables de entorno

  constructor(private http: HttpClient) {} // NOTE: Inyección del servicio HttpClient

  sendMessage(prompt: string, modelName: string): Observable<any> {
    const url = `${this.apiUrl}${modelName}/completions`; // NOTE: Construye la URL con el nombre del modelo
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // NOTE: Tipo de contenido JSON
      Authorization: `Bearer ${this.apiKey}`, // NOTE: Autorización con la clave de API
    });

    const body = {
      prompt: prompt, // NOTE: Cuerpo de la solicitud con el prompt
      max_tokens: 150, // NOTE: Máximo de tokens de la respuesta
    };

    return this.http.post<any>(url, body, { headers: headers }); // NOTE: Envía la solicitud POST a la API
  }
}
