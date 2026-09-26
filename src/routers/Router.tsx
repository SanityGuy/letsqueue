import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/router/ScrollToTop'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import Listings from '../pages/Listings'

import NotFound from '../pages/static/404'

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="listings" element={<Listings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}