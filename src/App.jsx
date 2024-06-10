import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Hero from './components/HeroTwo';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import SocialPosts from './components/SocialPosts';
import Services from './components/Services';
import Footer from './components/Footer';

import Logo from './assets/logo/logo_white.png';

function App() {
  return (
    <Router>
      <div className="app-container bg-logo-gradient">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <SocialPosts />
      <Contact />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Helmet title='404 Not Found' />
      <div className="bg-base">
        <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <img
            className="mx-auto h-14 w-auto sm:h-16"
            src={Logo}
            alt="Your Company"
          />
          <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
            <p className="text-2xl font-semibold leading-8 text-info">404</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-base sm:text-5xl">This page does not exist</h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-6 text-base">
              <span aria-hidden="true" className='mr-1'>&larr;</span>
              Back to home
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
