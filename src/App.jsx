import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BlogPost from './components/BlogPost';
import HomePage from './pages/HomePage';
import AreasPage from './pages/AreasPage';
import BairroPage from './pages/BairroPage';
import NotFoundPage from './pages/NotFoundPage';
import { getPost } from './data/posts';
import { getBairro } from './data/bairros';
import './App.css';

const BlogPostRoute = () => {
  const post = getPost(useParams().slug);
  return post ? <BlogPost post={post} /> : <NotFoundPage />;
};

const BairroRoute = () => {
  const bairro = getBairro(useParams().slug);
  return bairro ? <BairroPage bairro={bairro} /> : <NotFoundPage />;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPostRoute />} />
        <Route path="/areas-atendidas" element={<AreasPage />} />
        <Route path="/assistencia-tecnica/:slug" element={<BairroRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
