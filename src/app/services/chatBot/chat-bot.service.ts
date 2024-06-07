import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: HttpClientModule,
})
export class ChatBotService {
  private apiUrl = 'https://api.openai.com/v1/engines/';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string, modelName: string): Observable<any> {
    const url = `${this.apiUrl}${modelName}/completions`; // Aquí agregamos "/" entre la URL base y el nombre del modelo
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      prompt: prompt,
      max_tokens: 150,
    };

    return this.http.post<any>(url, body, { headers: headers });
  }
}
