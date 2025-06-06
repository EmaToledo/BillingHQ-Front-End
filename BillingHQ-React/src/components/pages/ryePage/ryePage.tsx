import React from "react";
import { ryeColumns, type Rye } from "../../../types/rye.d";
import Table from "../../ui/genericTable/genericTable";

function RYEPage() {
    const ryesData: Rye[] = [
        { id_rye: 1, id_user: '123', id_tutor1: '456', id_tutor2: '789' },
        { id_rye: 2, id_user: '234', id_tutor1: '567', id_tutor2: '890' },
        { id_rye: 3, id_user: '345', id_tutor1: '678', id_tutor2: '901' },
        { id_rye: 4, id_user: '456', id_tutor1: '789', id_tutor2: '012' },
        { id_rye: 5, id_user: '567', id_tutor1: '890', id_tutor2: '123' },
    ];

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">RYE</h1>
                    <p className="text-gray-600">Gestiona la información de los RYE</p>
                </div>
                <button className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nuevo RYE
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
                    <option value="Active">Activo</option>
                    <option value="Unpaid">Impago</option>
                    <option value="Inactive">Inactivo</option>
                </select>
            </div>

            <div className="bg-white rounded-lg">
                <Table data={ryesData} columns={ryeColumns} />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>0 de {ryesData.length} fila(s) seleccionada(s).</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Anterior</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default RYEPage;