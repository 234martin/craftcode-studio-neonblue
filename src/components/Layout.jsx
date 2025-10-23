import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div id="tsparticles" aria-hidden="true"></div>
      <Header/>
      <main className="relative z-10">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
