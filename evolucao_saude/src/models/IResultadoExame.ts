import { IItemResultado } from "./IItemResultado";

type IResultadoExame = {
    id: string | undefined,
    data: string,
    laboratorio: string,
    itens: Array<IItemResultado>
}

export type { IResultadoExame };