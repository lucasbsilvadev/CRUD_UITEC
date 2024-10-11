import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Para trabalhar com formulários
import { RouterModule, Routes } from '@angular/router'; // Importar RouterModule
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';
import { TransacaoListComponent } from './components/transacao-list/transacao-list.component';

// Definir as rotas
const routes: Routes = [
  { path: 'transacao-form', component: TransacaoFormComponent },
  { path: 'transacao-list', component: TransacaoListComponent },
  { path: '', redirectTo: '/transacao-list', pathMatch: 'full' } // Redireciona para a lista de transações
];

@NgModule({
  declarations: [
    AppComponent,
    TransacaoFormComponent,
    TransacaoListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), // Configurar o roteamento
  ],
  providers: [
    provideHttpClient(), // Adicionar o HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
