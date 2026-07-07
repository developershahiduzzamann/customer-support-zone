
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import { Suspense } from 'react'

const fetchTickets = async () => {
      const res = await fetch("/tickets.json");
      return res.json();
    }
const loadTickets = fetchTickets()

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<div className="max-w-7xl mx-auto px-2 text-center"><span className="loading loading-dots loading-xl"></span></div>}>
        <Card></Card>
      </Suspense>
      
      <Footer></Footer>
    </>
  )
}

export default App
