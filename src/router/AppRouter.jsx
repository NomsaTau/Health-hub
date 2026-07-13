import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import ServiceDetail from '../pages/ServiceDetail.jsx';
import Staffing from '../pages/Staffing.jsx';
import EmergencyServices from '../pages/EmergencyServices.jsx';
import About from '../pages/About.jsx';
import Blog from '../pages/Blog.jsx';
import Contact from '../pages/Contact.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/staffing" element={<Staffing />} />
          <Route path="/emergency-services" element={<EmergencyServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
