import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service'; // Importar o serviço

@Component({
  selector: 'app-transacao-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transacao-form.component.html',
  styleUrls: ['./transacao-form.component.css'],
})
export class TransacaoFormComponent {
  transacaoForm: FormGroup;
  @Output() transacaoAdded = new EventEmitter<any>(); // Emissor para notificar o componente pai

  constructor(private fb: FormBuilder, private transactionService: TransactionService) { // Injetar o serviço
    this.transacaoForm = this.fb.group({
      descricao: [''],
      valor: [0],
      tipo: ['receita'],  // valor padrão
      categoria: ['']     // Categoria como campo obrigatório
    });
  }

  onSubmit() {
    const newTransacao = this.transacaoForm.value;

    // Chamar o serviço para criar uma nova transação
    this.transactionService.createTransaction(newTransacao).subscribe({
      next: (response) => {
        console.log('Transação criada com sucesso!', response);
        this.transacaoAdded.emit(response); // Emitir o evento com a nova transação do backend
        this.transacaoForm.reset(); // Resetar o formulário após o envio
      },
      error: (err) => {
        console.error('Erro ao criar transação', err);
      }
    });
  }
}
