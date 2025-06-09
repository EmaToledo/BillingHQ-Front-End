// src/types/table.ts
interface TableRowData {
  [key: string]: unknown;
}

interface TableColumn {
  key: string;
  header: string;
  render?: (row: unknown) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export { TableRowData, TableColumn };