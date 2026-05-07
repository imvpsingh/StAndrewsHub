/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // Is component ko import karein
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';
import PoolPage from './pages/PoolPage';
import TuitionPage from './pages/TuitionPage';
import PGPage from './pages/PGPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Ye component har page switch par scroll reset karega */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="school" element={<SchoolPage />} />
          <Route path="pool" element={<PoolPage />} />
          <Route path="tuition" element={<TuitionPage />} />
          <Route path="pg" element={<PGPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}