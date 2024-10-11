import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';
import { TransacaoListComponent } from './components/transacao-list/transacao-list.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    HttpClientModule
  ],
})
export class AppComponent {
  title = 'frontend';
  transacoes: any[] = []; // Array para armazenar as transações

  onTransacaoAdded(transacao: any) {
    this.transacoes.push(transacao); // Adiciona a nova transação ao array
  }
}
