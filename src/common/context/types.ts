export type Horse = {
  id: number
  nome: string
  idade?: number
  cor?: string
  raca?: string
}

export type HorseContextProps = {
  horses: Horse[]
  handleSetHorse: (cavalo: Horse) => void
  deleteHorse: (idCavalo: number) => void
}
