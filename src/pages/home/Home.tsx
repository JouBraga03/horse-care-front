import clsx from 'clsx'
import HorseCare from '../../assets/horse_care.png'

import style from './style.module.css'

const Home = () => {
  return (
    <>
      <div className='w-full h-full flex items-center justify-center flex-col'>
        <picture>
          <img src={HorseCare} alt="horse care logo" />
        </picture>

        <h2 className={clsx('font-bold text-5xl', style.title)}> Bem vindo a Vet Care </h2>
      </div>
    </>
  )
}

export default Home
