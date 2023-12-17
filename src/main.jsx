import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header  from './Header'
import Footer  from './Footer'
import SomaliQuotes from './SomaliQuotes'
createRoot(root).render(
    <div>
        <Header/>
        <Footer/>
        <SomaliQuotes />
    </div>
)
