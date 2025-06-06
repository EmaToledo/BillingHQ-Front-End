import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/ui/sidebar/sidebar'
import DashboardPage from './components/pages/dashboardPage/dashboardPage'
import BranchPage from './components/pages/branchPage/branchPage'
import AssociatePage from './components/pages/associatePage/associatePage'
import RYEPage from './components/pages/ryePage/ryePage'
import PaymentPage from './components/pages/paymentPage/paymentPage'
import ConceptPage from './components/pages/conceptPage/conceptPage'
import BillPage from './components/pages/billPage/billPage'

function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <main className='flex-1 text-black min-h-screen'>
          <Routes>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/branches' element={<BranchPage />} />
            <Route path='/associates' element={<AssociatePage />} />
            <Route path='/ryes' element={<RYEPage />} />
            <Route path='/payments' element={<PaymentPage />} />
            <Route path='/concepts' element={<ConceptPage />} />
            <Route path='/bill-notes' element={<BillPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
