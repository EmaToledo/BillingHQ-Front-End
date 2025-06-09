import { Float } from "./../../node_modules/csstype/index.d";

import { TableColumn } from "./table";

export interface Bill {
  id_bill: number;
  generation_date: string;
  bill_period: string;
  subtotal: Float;
  total: Float;
  payment_code: string;
  due_date: string;
  status: "Active" | "Unpaid" | "Inactive";
  bill_unic_code: string;
  bill_file: string;
  id_associate: number | null; // todo -> change to get userModel
  id_branch: number | null; // todo -> change to get userModel
}

export const billColumns: TableColumn<Bill>[] = [
  { key: "id_bill", header: "ID Nota de Cobro" },
  { key: "generation_date", header: "Fecha de Generacion" },
  { key: "bill_period", header: "Periodo" },
  { key: "due_date", header: "Vencimiento" },
  { key: "total", header: "Total" },
  { key: "status", header: "Estado" },
  { key: "bill_unic_code", header: "Codigo de Nota de Cobro" },
  { key: "payment_code", header: "Codigo de Pago" },
  { key: "bill_file", header: "Archivo" },
];
