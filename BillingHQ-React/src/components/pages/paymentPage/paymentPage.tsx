import React from "react";
import { paymentColumns, type Payment } from "../../../types/payment.d";
import Table from "../../ui/table/table";

function PaymentPage(){
    const paymentsData: Payment[] = [
        {id_payment: 1,payment_date: new Date().toLocaleDateString(),amount_paid: 100.00,payment_method: "Tarjeta de Credito",
            receipt_file: "recibo1.pdf",id_bill: 1,transaction_code: "ABC123"},
        {id_payment: 2,payment_date: new Date().toLocaleDateString(),amount_paid: 200.00,payment_method: "Transferencia",
            receipt_file: "recibo2.pdf",id_bill: 2,transaction_code: "DEF456"},
        {id_payment: 3,payment_date: new Date().toLocaleDateString(),amount_paid: 300.00,payment_method: "Efectivo",
            receipt_file: "recibo3.pdf",id_bill: 3,transaction_code: "GHI789"},
        {id_payment: 4,payment_date: new Date().toLocaleDateString(),amount_paid: 400.00,payment_method: "Cheque",
            receipt_file: "recibo4.pdf",id_bill: 4,transaction_code: "JKL012"},
        {id_payment: 5,payment_date: new Date().toLocaleDateString(),amount_paid: 500.00,payment_method: "Tarjeta de Debito",
            receipt_file: "recibo5.pdf",id_bill: 5,transaction_code: "MNO345"}
    ];

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Pagos</h1>
                    <p className="text-gray-600">Gestiona la información de los Pagos</p>
                </div>
                <button className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nuevo Pago
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
                    <option value="Active">Pago</option>
                    <option value="Unpaid">Impago</option>
                </select>
            </div>

            <div className="bg-white rounded-lg">
                <Table data={paymentsData} columns={paymentColumns} />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>0 de {paymentsData.length} fila(s) seleccionada(s).</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Anterior</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;