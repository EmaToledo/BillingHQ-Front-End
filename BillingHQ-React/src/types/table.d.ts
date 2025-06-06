interface TableRowData {
  [key: string]: unknown;
}

interface TableColumn<T extends TableRowData> {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export { TableRowData, TableColumn };