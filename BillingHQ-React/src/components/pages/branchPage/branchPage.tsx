import React from "react";
import { branchColumns, type Branch } from "../../../types/branch.d";
import Table from '../../ui/genericTable/genericTable';

function BranchPage(){
    const branchesData: Branch[] = [
        { id_branch: 1, name: 'Rotary-MendozaCapital', cuit: '52es', phone_number: '104556', mail: 'hamani@gmail.me', id_president: 878, id_treasurer: 414, state: 'Active', code: 3166 },
        { id_branch: 2, name: 'Rotary-SanFrancisco', cuit: '4710', phone_number: '133510', mail: 'a@freeml.net', id_president: 12, id_treasurer: 1604, state: 'Unpaid', code: 3167 },
        { id_branch: 3, name: 'Rotary-Cordoba', cuit: '4710', phone_number: '133510', mail: 'asdas@qweqwe.com', id_president: 12, id_treasurer: 1604, state: 'Inactive', code: 3168 },
        { id_branch: 4, name: 'Rotary-Catamarca', cuit: '4710', phone_number: '133510', mail: 'qweqweq@eqwe.com', id_president: 12, id_treasurer: 1604, state: 'Active', code: 3169 },
        { id_branch: 5, name: 'Rotary-Salta', cuit: '4710', phone_number: '133510', mail: 'qweqwe@eqwewe.com', id_president: 12, id_treasurer: 1604, state: 'Unpaid', code: 3170 }
    ];

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Clubes</h1>
                    <p className="text-gray-600">Gestiona la información de los clubes</p>
                </div>
                <button className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nuevo Club
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
                <Table data={branchesData} columns={branchColumns} />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>0 de {branchesData.length} fila(s) seleccionada(s).</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Anterior</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default BranchPage;