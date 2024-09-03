export type ICavaloContext = {
  cavalos: ICavalo[];
  handleSetCavalos: (cavalo: ICavalo) => void;
  deleteCavalos: (idCavalo: number) => void;
}

export type ICavalo = {
  id: number;
  nome: string;
  idade?: number;
  cor?: string;
  raca?: string;
}
