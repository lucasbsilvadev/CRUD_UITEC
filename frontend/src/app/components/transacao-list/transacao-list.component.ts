import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { TransacaoFormComponent } from '../transacao-form/transacao-form.component';

@Component({
  selector: 'app-transacao-list',
  standalone: true,
  imports: [CommonModule, TransacaoFormComponent],
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.css']
})
export class TransacaoListComponent implements OnInit {
  @Input() transacoes: any[] = [];
  title = 'frontend';
    
  constructor(public transtionService: TransactionService) {}

  onTransacaoAdded(transacao: any) {
    this.transacoes.push(transacao); // Adiciona a nova transação ao array
  }

  ngOnInit() {
    this.getTransacoes();  // Carregar transações ao iniciar o componente
  }

  getTransacoes() {
    this.transtionService.getTransactions().subscribe({
      next: (data) => {
        this.transacoes = data;
      },
      error: (err) => {
        console.error('Erro ao buscar transações:', err);
      }
    });
  }

  deleteTransacao(id: number) {
     this.transtionService.deleteTransaction(id).subscribe({
        next: () => {
          this.getTransacoes(); // Atualiza a lista após excluir
      },
       error: (err) => {
           console.error('Erro ao excluir transação:', err);
      }
    });
  }

  updateTransacao(id: number, updatedData: any) {
    this.transtionService.updateTransaction(id, updatedData).subscribe({
      next: (response) => {
        console.log('Transação atualizada com sucesso!', response);
        this.getTransacoes();  // Atualiza a lista de transações
      },
      error: (err) => {
        console.error('Erro ao atualizar transação:', err);
      }
    });
  }

  editTransacao(transacao: any) {
    // Lógica para editar a transação aqui. Pode abrir um modal ou redirecionar o usuário para um formulário de edição.
    console.log('Editar transação:', transacao);
  }
}
