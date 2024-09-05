import { createContext, ReactNode, useContext, useState } from 'react'

import { Horse, HorseContextProps } from './types'

export const HorseContext = createContext<HorseContextProps>({} as HorseContextProps)

HorseContext.displayName = 'HorseContext'

export const HorseProvider = (children: ReactNode) => {
  const [horses, setHorses] = useState<Horse[]>([])

  const handleSetHorse = (horse: Horse) => {
    setHorses([...horses, horse])
  }

  const deleteHorse = (indexItem: number) => {
    const filteredHorses = horses.filter(({ id }) => indexItem !== id)
    return setHorses(filteredHorses)
  }

  return <HorseContext.Provider value={{ horses, handleSetHorse, deleteHorse }}>{children}</HorseContext.Provider>
}

export default HorseProvider

export const useHorseContext = () => {
  return useContext(HorseContext)
}
