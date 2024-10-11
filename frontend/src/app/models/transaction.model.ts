export interface Transaction {
    id?: number;
    descricao: string;
    valor: number;
    tipo: 'receita' | 'despesa';
}
