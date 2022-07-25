export type APIResponseType = {
  modelName: string;
  id: string;
  finalidad: string;
  NUTS: string;
  url_bases_regul: string;
  region_impacto: string;
  importe: number;
  sector_beneficiario: string;
  beneficiario: string;
  tipo_beneficiario: string;
  ayuda_equivalente: number;
  score: number;
  importe_total: number; //Total quantity destined to the grant by the government
  apli_presupuestaria: string;
  instrumento: string;
  "CIF/NIF": string;
  codigo_bdns: number;
  departamento: string;
  titulo_convocatoria: string;
  organo: string;
  administracion: string;
  fecha_concesion: string;
};
