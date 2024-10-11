import { Component } from '@angular/core';
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';
import { TransacaoListComponent } from './components/transacao-list/transacao-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  transacoes: any[] = []; // Array para armazenar as transações

  onTransacaoAdded(transacao: any) {
    this.transacoes.push(transacao); // Adiciona a nova transação ao array
  }
}
