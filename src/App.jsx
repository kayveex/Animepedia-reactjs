import { useState } from 'react'
import Navbar from './components/organisms/Partials/navbar'
import './App.css'
import AnimeCard from './components/atoms/AnimeCard'
import { useEffect } from 'react'
import useAnimeStore  from './hooks/useAnimeStore'

function App() {

  // from useAnimeStore
  const { animeData, isLoading, isError, fetchAnime } = useAnimeStore();

  useEffect(() => {
    fetchAnime('top/anime', ''); 
  }, []);

  console.log(animeData.data);
  

  return (
    <>
      <Navbar title={"Animepedia"} />
      <main className='p-4'>
        <section className='flex flex-col w-full'>
          <h1 className='text-3xl text-center mb-4 mt-2 font-bold text-white'>Top Anime</h1>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
            {isLoading? (
              <div className='flex justify-center items-center'>
                <p className='text-white text-2xl'>Loading...</p>
              </div>
            ) : isError? (
              <div className='flex justify-center items-center'>
                <p className='text-white text-2xl'>Error fetching data</p>
              </div>
            ) : (
              animeData.map((anime) => (
                <AnimeCard key={anime.mal_id} />
              ))


            )}




          </div> */}

        </section>

      </main>

    </>
  )
}

export default App
