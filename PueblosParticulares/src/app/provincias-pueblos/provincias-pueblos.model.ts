export interface Provincia{//Los atributos deben llamarse igual que en la base de datos
    Abreviatura : string;
    comunidad   : string;
    idprovincia : number;
    provincia  : string;
    provinciaseo: string;

}

export interface Pueblo{
    postal      : number;
    poblacion   : string;
    idprovincia : number;
    idpueblo    : number;
    latitud     : number;
    longitud    : number;

}