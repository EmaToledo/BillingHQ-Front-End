import { TableColumn } from './table';

export interface Branch {
  id_branch: number;
  name: string;
  cuit: string;
  phone_number: string;
  mail: string;
  id_president: number | null; // todo -> change to get userModel
  id_treasurer: number | null; // todo -> change to get userModel
  state: 'Active' | 'Unpaid' | 'Inactive';
  code: number;

  [key: string]: unknown;
}

export const branchColumns: TableColumn<Branch>[] = [
  { key: 'id_branch', header: 'ID Club' },
  { key: 'name', header: 'Nombre' },
  { key: 'cuit', header: 'CUIT' },
  { key: 'phone_number', header: 'Teléfono' },
  { key: 'mail', header: 'Email' },
  { key: 'id_president', header: 'Presidente' },
  { key: 'id_treasurer', header: 'Tesorero' },
  { key: 'state', header: 'Estado' },
  { key: 'code', header: 'Código' }
];