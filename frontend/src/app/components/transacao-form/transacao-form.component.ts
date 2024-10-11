import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 

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

  constructor(private fb: FormBuilder) {
    this.transacaoForm = this.fb.group({
      descricao: [''],
      valor: [0],
      tipo: ['receita'],  // valor padrão
      categoria: ['']     // Categoria como campo obrigatório
    });
  }

  onSubmit() {
    const newTransacao = this.transacaoForm.value;
    this.transacaoAdded.emit(newTransacao); // Emitir o evento para o pai
    this.transacaoForm.reset(); // Resetar o formulário após o envio
  }
}
