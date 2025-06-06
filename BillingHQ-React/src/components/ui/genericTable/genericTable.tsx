// src/components/ui/Table.tsx
import React from 'react';
import type { TableColumn, TableRowData } from '../../../types/table';

interface TableProps<T extends TableRowData> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
  headerClassName?: string;
  rowClassName?: string | ((row: T) => string);
  cellClassName?: string;
  emptyMessage?: string;
}

function Table<T extends TableRowData>({
  data,
  columns,
  className,
  headerClassName,
  rowClassName,
  cellClassName,
  emptyMessage = "No hay datos para mostrar.",
}: TableProps<T>) {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 bg-white rounded-lg shadow-sm">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto rounded-lg shadow-sm ${className || ''}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className={`bg-gray-50 ${headerClassName || ''}`}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.headerClassName || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              // Es crucial usar un ID único del row si está disponible en tus datos,
              // de lo contrario, rowIndex es un fallback pero puede causar problemas con reordenamientos.
              key={(row as { id?: string | number }).id || rowIndex}
              className={typeof rowClassName === 'function' ? rowClassName(row) : rowClassName}
            >
              {columns.map((column) => (
                <td
                  key={column.key as string}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${cellClassName || ''} ${column.className || ''}`}
                >
                  {column.render
                    ? column.render(row)
                    : (row[column.key] as React.ReactNode)
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;