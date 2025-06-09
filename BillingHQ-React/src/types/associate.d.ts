import { TableColumn } from "./table";

export interface Associate {
  id_user: number;
  name: string;
  surname: string;
  cuil: number;
  dni: number;
  phone_number: number;
  mail: string;
  role: "Associate";
  state: "Active" | "Unpaid" | "Inactive";
}

export const associateColumns: TableColumn<Associate>[] = [
  { key: "id_user", header: "ID Socio" },
  { key: "name", header: "Nombre" },
  { key: "surname", header: "Apellido" },
  { key: "cuil", header: "CUIL" },
  { key: "dni", header: "DNI" },
  { key: "phone_number", header: "Teléfono" },
  { key: "mail", header: "Email" },
  { key: "state", header: "Estado" },
];
