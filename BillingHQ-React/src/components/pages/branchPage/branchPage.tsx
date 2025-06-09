import * as React from "react";
import { useState } from "react";
import Table from '../../ui/table/table';
import AddClubModal from "./AddBranchModal";
import { branchColumns, type Branch } from "../../../types/branch.d";

function BranchPage(){
    const [branchesData, setBranchesData] = useState<Branch[]>([
        { id_branch: 1, name: 'Rotary-MendozaCapital', cuit: 20837492738, phone_number: 104556, mail: 'hamani@gmail.me', id_president: 878, id_treasurer: 414, state: 'Active', code: 'B3166' },
        { id_branch: 2, name: 'Rotary-SanFrancisco', cuit: 20837492739, phone_number: 104557, mail: 'a@freeml.net', id_president: 12, id_treasurer: 1604, state: 'Unpaid', code: 'B3167' },
        { id_branch: 3, name: 'Rotary-Cordoba', cuit: 20837492740, phone_number: 104558, mail: 'asdas@qweqwe.com', id_president: 12, id_treasurer: 1604, state: 'Inactive', code: 'B3168' },
        { id_branch: 4, name: 'Rotary-Catamarca', cuit: 20837492741, phone_number: 104559, mail: 'qweqweq@eqwe.com', id_president: 12, id_treasurer: 1604, state: 'Active', code: 'B3169' },
        { id_branch: 5, name: 'Rotary-Salta', cuit: 20837492742, phone_number: 104560, mail: 'qweqwe@eqwewe.com', id_president: 12, id_treasurer: 1604, state: 'Unpaid', code: 'B3170' }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAddClub = (newBranchData: Omit<Branch, 'id_branch'>) => {
        const newId = branchesData.length > 0 ? Math.max(...branchesData.map(b => b.id_branch)) + 1 : 1;
        const branchToAdd: Branch = { id_branch: newId, ...newBranchData };
        setBranchesData(prev => [...prev, branchToAdd]);
        console.log("Nuevo club agregado (simulado):", branchToAdd);
    };

    return(
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Clubes</h1>
                    <p className="text-gray-600">Gestiona la información de los clubes</p>
                </div>
                <button
                    onClick={handleOpenModal}
                    className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors flex items-center gap-2"
                >
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

            <AddClubModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddClub={handleAddClub}
            />
        </div>
    );
}

export default BranchPage;