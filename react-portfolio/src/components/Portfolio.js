import React, { useState } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { AboutMe } from './AboutMe/AboutMe';


export function Portfolio() {

  const [page, setPage] = useState(<AboutMe />)


  return (
    <div>
      <Header setPage={setPage} />
      {page}
      <Footer />
    </div>
  )
}