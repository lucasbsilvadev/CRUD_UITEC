import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importar o AppComponent
import { appConfig } from './app/app.config'; // Se você tiver alguma configuração

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
