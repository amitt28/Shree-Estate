import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about-us/About-us';
import Contact from '../pages/Contact-us/Contact-us';
import Blogs from '../pages/blogs/Blogs';
import Terms from '../pages/terms-&-conditions/Terms-&-conditions';
import Privacy from '../pages/privacy-policy/Privacy-policy';
import Error from '../pages/error-page/Error'
import View from '../components/home-page-sections/properties-section/view-all/view-all'
import PropertyDetail from '../components/property-card/detailed-property-info/detailed'
import BlogDetail from '../components/blog-card/detailed-blog-info'

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/terms-conditions" element={<Terms/>} />
      <Route path="/privacy-policy" element={<Privacy/>} />
      <Route path="/view-all" element={<View/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/property/:id" element={<PropertyDetail/>} />
      <Route path="/read/:id" element={<BlogDetail/>} />
  </Routes>
);

export default AppRouter;
