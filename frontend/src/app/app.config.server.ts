import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Importa a configuração do aplicativo

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Habilita a renderização do lado do servidor
  ]
};

// Mescla a configuração do cliente com a do servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);
