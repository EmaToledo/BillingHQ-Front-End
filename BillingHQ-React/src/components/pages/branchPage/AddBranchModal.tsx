import React, { useState } from 'react';
import { type Branch } from '../../../types/branch.d';
import Modal from '../../ui/modal/modal';

type NewBranchData = Omit<Branch, 'id_branch'>;

interface AddClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddClub: (newClub: NewBranchData) => void;
}

const AddClubModal: React.FC<AddClubModalProps> = ({ isOpen, onClose, onAddClub }) => {
  const [formData, setFormData] = useState<NewBranchData>({
    name: '',
    cuit: 0,
    phone_number: 0,
    mail: '',
    id_president: null,
    id_treasurer: null,
    state: 'Active',
    code: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData(prev => {
        let parsedValue: string | number | null = value;

        if (name === 'cuit' || name === 'phone_number') {
            parsedValue = Number(value);
        } else if (name === 'id_president' || name === 'id_treasurer') {
            parsedValue = value === '' ? null : Number(value);
        }

        return {
            ...prev,
            [name]: parsedValue
        } as NewBranchData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddClub(formData);
    setFormData({
      name: '', cuit: 0, phone_number: 0, mail: '',
      id_president: null, id_treasurer: null, state: 'Active', code: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agregar Nuevo Club">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Club</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name as string}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cuit" className="block text-sm font-medium text-gray-700">CUIT</label>
          <input
            type="number"
            id="cuit"
            name="cuit"
            value={formData.cuit as number}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number as number}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail as string}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id_president" className="block text-sm font-medium text-gray-700">ID Presidente</label>
          <input
            type="number"
            id="id_president"
            name="id_president"
            value={formData.id_president === null ? 0 : formData.id_president as number}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id_treasurer" className="block text-sm font-medium text-gray-700">ID Tesorero</label>
          <input
            type="number"
            id="id_treasurer"
            name="id_treasurer"
            value={formData.id_treasurer === null ? 0 : formData.id_treasurer as number}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado</label>
          <select
            id="state"
            name="state"
            value={formData.state as string}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Active">Activo</option>
            <option value="Unpaid">Impago</option>
            <option value="Inactive">Inactivo</option>
          </select>
        </div>
        <div className="mb-4">
           <label htmlFor="code" className="block text-sm font-medium text-gray-700">Código</label>
           <input
             type="text"
             id="code"
             name="code"
             value={formData.code as string}
             onChange={handleChange}
             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
           />
         </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#46A2E3] text-white rounded-md hover:bg-[#46A2E3]/85 transition-colors"
          >
            Guardar Club
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddClubModal;