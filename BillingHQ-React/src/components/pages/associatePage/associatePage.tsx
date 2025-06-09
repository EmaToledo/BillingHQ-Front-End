import React from "react";
import { associateColumns, type Associate } from "../../../types/associate.d";
import Table from "../../ui/table/table";

function AssociatePage() {
    const associatesData: Associate[] = [
        { id_user: 1, name: 'Juan', surname: 'Pérez', cuil: 20, dni: 12345678, phone_number: 123456789, mail: 'asdasd@asdasd.com', role: 'Associate', state: 'Active' },
        { id_user: 2, name: 'María', surname: 'Gómez', cuil: 20, dni: 87654321, phone_number: 987654321, mail: 'eqweqwe@qweqwe.com', role: 'Associate', state: 'Unpaid' },
        { id_user: 3, name: 'Pedro', surname: 'López', cuil: 20, dni: 11223344, phone_number: 123123123, mail: 'asdasdsd@asdasd.com', role: 'Associate', state: 'Inactive' },
        { id_user: 4, name: 'Ana', surname: 'Martínez', cuil: 20, dni: 44332211, phone_number: 321321321, mail: 'asdasd@dads.com', role: 'Associate', state: 'Active' },
        { id_user: 5, name: 'Luis', surname: 'Hernández', cuil: 20, dni: 55667788, phone_number: 654654654, mail: 'asdasdasd@asdasd.com', role: 'Associate', state: 'Unpaid' },
    ];

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Socios</h1>
                    <p className="text-gray-600">Gestiona la información de los socios</p>
                </div>
                <button className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nuevo Socio
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
                <Table data={associatesData} columns={associateColumns} />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>0 de {associatesData.length} fila(s) seleccionada(s).</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Anterior</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default AssociatePage;