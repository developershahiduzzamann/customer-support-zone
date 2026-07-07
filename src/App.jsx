import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'

// Promise-টি বাইরে রাখা হয়েছে যাতে বারবার রি-রেন্ডার না হয়
const ticketsPromise = fetch("/tickets.json").then((res) => res.json());

function App() {
  return (
    <>
      <NavBar />
      
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-2 text-center py-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      }>
        {/* Card কম্পোনেন্টে সরাসরি ticketsPromise প্রপ্স পাঠানো হলো */}
        <Card ticketsPromise={ticketsPromise} />
      </Suspense>
      
      <Footer />
    </>
  )
}

export default App;