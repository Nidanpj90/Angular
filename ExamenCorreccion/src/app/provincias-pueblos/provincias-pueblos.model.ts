export interface Provincia {
    idprovincia: number;
    provincia: string;
    provinciaseo: string;
    abreviatura: string;
    comunidad: string;
  }
  
  export interface Pueblo {
    idpoblacion: number;
    idprovincia: number;
    poblacion: string;
    poblacionseo: string;
    postal: number;
    latitud: number;
    longitud: number;
  }