import React from 'react';

interface DashboardCardProps {
    title: string;
    value: string;
    trend: string;
    icon: React.ReactNode; // SVG Icon or similar
    bgColor?: string; // Optional bg color prop
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, trend, icon, bgColor = "bg-white" }) => (
    <div className={`p-6 rounded-lg shadow-md flex items-center justify-between ${bgColor}`}>
        <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
            <p className={`mt-1 text-sm font-medium ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {trend} desde el mes pasado
            </p>
        </div>
        <div className="text-gray-400">
            {icon}
        </div>
    </div>
);

interface ChartPlaceholderProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md h-96 flex flex-col items-center justify-center text-center">
        <div className="text-gray-400 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l9-8.406m0 0l9 8.406m-9-8.406v11.812" />
            </svg>
        </div>
    </div>
);


function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Reportes Gerenciales</h1>
                <p className="text-gray-600">Visualiza los indicadores clave de rendimiento</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <DashboardCard
                    title="Total Socios"
                    value="1,248"
                    trend="+12%"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
                />
                <DashboardCard
                    title="Total Clubes"
                    value="42"
                    trend="+2"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-1.5-10.5L11.25 4.5 2.25 10.5m1.5 0v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V10.5m-9.75 10.5V9.75m3 9.75V9.75m3 9.75V9.75m3 9.75V9.75" /></svg>}
                />
                <DashboardCard
                    title="Pagos Pendientes"
                    value="$24,565"
                    trend="-5%"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9H19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3.75h15c1.036 0 1.875-.84 1.875-1.875V6.75c0-1.036-.84-1.875-1.875-1.875H3.75C2.714 4.875 1.875 5.714 1.875 6.75v10.5c0 1.035.84 1.875 1.875 1.875z" /></svg>}
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartPlaceholder
                    title="Resumen de Pagos"
                    description="Pagos recibidos durante los últimos 6 meses"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-300"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l9-8.406m0 0l9 8.406m-9-8.406v11.812" /></svg>}
                />
                <ChartPlaceholder
                    title="Distribución de Socios"
                    description="Distribución por club"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-300"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>}
                />
            </div>
        </div>
    );
}

export default DashboardPage;