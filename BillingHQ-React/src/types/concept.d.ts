import { Float } from './../../node_modules/csstype/index.d';
import { TableColumn } from './table';

export interface Concept {
  id_concept: number;
  name: string;
  amount: Float;

  [key: string]: unknown;
}

export const conceptColumns: TableColumn<Concept>[] = [
  { key: 'id_concept', header: 'ID Concepto' },
  { key: 'name', header: 'Nombre' },
  { key: 'amount', header: 'Monto' }
];