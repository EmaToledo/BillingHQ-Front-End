import React from 'react';
import { billColumns, type Bill } from '../../../types/bill.d';
import Table from '../../ui/table/table';

function BillPage(){
    const billsData: Bill[] = [
        {id_bill: 1,generation_date: '2023-10-01',bill_period: 'Abril',subtotal: 100,total: 120,
            payment_code: '123456',due_date: '2023-11-01',status: 'Active',bill_unic_code: 'ABC123',
            bill_file: 'file.pdf',id_associate: 1,id_branch: null},
        {id_bill: 2,generation_date: '2023-10-02',bill_period: 'Mayo',subtotal: 200,total: 240,
            payment_code: '654321',due_date: '2023-11-02',status: 'Unpaid',bill_unic_code: 'DEF456',
            bill_file: 'file.pdf',id_associate: null,id_branch: 2},
        {id_bill: 3,generation_date: '2023-10-03',bill_period: 'Junio',subtotal: 300,total: 360,
            payment_code: '789012',due_date: '2023-11-03',status: 'Inactive',bill_unic_code: 'GHI789',
            bill_file: 'file.pdf',id_associate: 3,id_branch: null},
        {id_bill: 4,generation_date: '2023-10-04',bill_period: 'Julio',subtotal: 400,total: 480,
            payment_code: '345678',due_date: '2023-11-04',status: 'Active',bill_unic_code: 'JKL012',
            bill_file: 'file.pdf',id_associate: null,id_branch: 4},
        {id_bill: 5,generation_date: '2023-10-05',bill_period: 'Agosto',subtotal: 500,total: 600,
            payment_code: '901234',due_date: '2023-11-05',status: 'Unpaid',bill_unic_code: 'MNO345',
            bill_file: 'file.pdf',id_associate: 5,id_branch: null}
    ];

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Notas de Cobro</h1>
                    <p className="text-gray-600">Gestiona la información de los Notas de Cobro</p>
                </div>
                <button className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nueva Nota de Cobro
                </button>
            </div>

            <div className="mb-6 flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Filtrar por...</option>
                    <option value="Paid">Pago</option>
                    <option value="Unpaid">Impago</option>
                </select>
            </div>

            <div className="bg-white rounded-lg">
                <Table data={billsData} columns={billColumns} />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>0 de {billsData.length} fila(s) seleccionada(s).</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Anterior</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default BillPage;