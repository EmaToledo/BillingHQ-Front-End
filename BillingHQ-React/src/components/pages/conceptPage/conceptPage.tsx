import React from 'react';
import { conceptColumns, type Concept } from '../../../types/concept.d';
import Table from '../../ui/table/table';

function ConceptPage(){
    const conceptsData: Concept[] = [
        { id_concept: 1, name: 'Cuota Social', amount: 1500 },
        { id_concept: 2, name: 'Evento especial', amount: 5000.00 },
        { id_concept: 3, name: 'Cena de fin de año', amount: 20000.00 }
    ];

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Conceptos</h1>
                    <p className="text-gray-600">Gestiona la información de los Conceptos</p>
                </div>
                <button className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nuevo Concepto
                </button>
            </div>

            <div className="mb-6 flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/*
                <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Filtrar por...</option>
                    <option value="Active">Pago</option>
                    <option value="Unpaid">Impago</option>
                </select>
                */}
            </div>

            <div className="bg-white rounded-lg">
                <Table data={conceptsData} columns={conceptColumns} />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>0 de {conceptsData.length} fila(s) seleccionada(s).</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Anterior</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default ConceptPage;