import { TableColumn } from "./table";

export interface Rye {
  id_rye: number;
  id_user: string;
  id_tutor1: string;
  id_tutor1: string;
}

export const ryeColumns: TableColumn<Rye>[] = [
  { key: "id_rye", header: "ID RYE" },
  { key: "id_user", header: "ID User" },
  { key: "id_tutor1", header: "ID Tutor 1" },
  { key: "id_tutor2", header: "ID Tutor 2" },
];
