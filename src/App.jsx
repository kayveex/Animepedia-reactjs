import { useState } from 'react'
import Navbar from './components/organisms/Partials/navbar'
import './App.css'
import AnimeCard from './components/atoms/AnimeCard'

function App() {

  return (
    <>
      <Navbar title={"Animepedia"} />
      <main className='p-4'>
        <section className='flex flex-col w-full'>
          <h1 className='text-3xl text-center mb-4 mt-2 font-bold text-white'>Top Anime</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />

          </div>

        </section>

      </main>

    </>
  )
}

export default App
