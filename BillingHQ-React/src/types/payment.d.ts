import { Float } from './../../node_modules/csstype/index.d';
import { TableColumn } from './table';

export interface Payment {
  id_payment: number;
  payment_date: string; // todo -> from backend send string not date
  amount_paid: Float;
  payment_method: string;
  receipt_file: string;
  id_bill: number;
  transaction_code: string;

  [key: string]: unknown;
}

export const paymentColumns: TableColumn<Payment>[] = [
  { key: 'id_payment', header: 'ID Pago' },
  { key: 'payment_date', header: 'Fecha de Pago' },
  { key: 'payment_method', header: 'Metodo de Pago' },
  { key: 'amount_paid', header: 'Monto' },
  { key: 'transaction_code', header: 'Codigo' },
  { key: 'id_bill', header: 'ID Bill' },
  { key: 'receipt_file', header: 'Recibo' }
];