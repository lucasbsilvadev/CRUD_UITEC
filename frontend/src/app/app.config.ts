import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa as rotas definidas
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }), // Habilita coalescimento de eventos para otimização
    provideRouter(routes), // Fornece as rotas da aplicação
    provideClientHydration() // Habilita a hidratação do cliente
  ]
};
