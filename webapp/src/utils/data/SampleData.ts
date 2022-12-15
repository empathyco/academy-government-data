import {
  bidType,
  filterFamilyType,
  filterType,
  seriesType,
} from "@/models/DataType";
import { APIResponseType } from "@/models/APIResponseType";

// Data samples from all the application

// Data sample for a series given with one set of information (for word cloud and pie chart)
export const singleSerie: seriesType = {
  content: [
    {
      name: "Genres",
      data: [
        {
          value: 9,
          name: "News",
        },
        {
          value: 133,
          name: "Drama",
        },
        {
          value: 144,
          name: "Fantasy",
        },
        {
          value: 224,
          name: "Horror",
        },
        {
          value: 100,
          name: "Biography",
        },
        {
          value: 84,
          name: "Music",
        },
        {
          value: 71,
          name: "War",
        },
        {
          value: 332,
          name: "Crime",
        },
        {
          value: 59,
          name: "Western",
        },
        {
          value: 179,
          name: "Family",
        },
        {
          value: 318,
          name: "Adventure",
        },
        {
          value: 408,
          name: "Action",
        },
        {
          value: 96,
          name: "History",
        },
        {
          value: 159,
          name: "Mystery",
        },
        {
          value: 116,
          name: "Sci-Fi",
        },
        {
          value: 52,
          name: "Musical",
        },
        {
          value: 272,
          name: "Thriller",
        },
        {
          value: 14,
          name: "Film-Noir",
        },
      ],
    },
  ],
};
/*
// Data sample for a series given several sets of information
export const severalSeries: seriesType = {
  content: [
    {
      name: "Documentary",
      data: [
        {
          // name property is used for the datalabel
          // value property is used for the volume of the bubble
          value: 812,
          name: "Films",
        },
        {
          value: 951,
          name: "TVReality",
        },
        {
          value: 117,
          name: "Series",
        },
        {
          value: 17,
          name: "Short",
        },
      ],
    },
    {
      name: "Drama",
      data: [
        {
          // name property is used for the datalabel
          // value property is used for the volume of the bubble
          value: 612,
          name: "Films",
        },
        {
          value: 251,
          name: "TVReality",
        },
        {
          value: 17,
          name: "Series",
        },
        {
          value: 317,
          name: "Short",
        },
      ],
    },
    {
      name: "Comedy",
      data: [
        {
          // name property is used for the datalabel
          // value property is used for the volume of the bubble
          value: 312,
          name: "Films",
        },
        {
          value: 351,
          name: "TVReality",
        },
        {
          value: 217,
          name: "Series",
        },
        {
          value: 217,
          name: "Short",
        },
      ],
    },
  ],
};
*/
export const severalSeries: seriesType = {
  content: [
    {
      name: "Inditex",
      data: [
        {
          // name property is used for the datalabel
          // value property is used for the volume of the bubble
          value: 812,
          name: "2010",
        },
        {
          value: 951,
          name: "2011",
        },
        {
          value: 117,
          name: "2012",
        },
        {
          value: 17,
          name: "2013",
        },
      ],
    },
    {
      name: "El Corte Inglés",
      data: [
        {
          // name property is used for the datalabel
          // value property is used for the volume of the bubble
          value: 612,
          name: "2023",
        },
        {
          value: 251,
          name: "2024",
        },
        {
          value: 17,
          name: "2025",
        },
        {
          value: 317,
          name: "2026",
        },
      ],
    },
    {
      name: "Game",
      data: [
        {
          // name property is used for the datalabel
          // value property is used for the volume of the bubble
          value: 312,
          name: "2010",
        },
        {
          value: 351,
          name: "2011",
        },
        {
          value: 217,
          name: "2012",
        },
        {
          value: 217,
          name: "2013",
        },
      ],
    },
  ],
};

// Several family filters
export const filtersSample: filterFamilyType[] = [
  {
    title: "Provincia",
    content: [
      {
        label: "Asturias",
        modelName: "SimpleFilter",
        selected: false,
        id: "asturias",
        value: "asturias",
        facetId: "asturias",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Andalucía",
        modelName: "SimpleFilter",
        selected: false,
        id: "andalucía",
        value: "andalucía",
        facetId: "andalucía",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Castilla y León",
        modelName: "SimpleFilter",
        selected: false,
        id: "castilla",
        value: "castilla",
        facetId: "castilla",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Galicia",
        modelName: "SimpleFilter",
        selected: false,
        id: "galicia",
        value: "galicia",
        facetId: "galicia",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "País Vasco",
        modelName: "SimpleFilter",
        selected: false,
        id: "vasco",
        value: "vasco",
        facetId: "vasco",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "La Rioja",
        modelName: "SimpleFilter",
        selected: false,
        id: "rioja",
        value: "rioja",
        facetId: "rioja",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Santander",
        modelName: "SimpleFilter",
        selected: false,
        id: "santander",
        value: "santander",
        facetId: "santander",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Extremadura",
        modelName: "SimpleFilter",
        selected: false,
        id: "extremadura",
        value: "extremadura",
        facetId: "extremadura",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Cataluña",
        modelName: "SimpleFilter",
        selected: false,
        id: "cataluña",
        value: "cataluña",
        facetId: "cataluña",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Valencia",
        modelName: "SimpleFilter",
        selected: false,
        id: "valencia",
        value: "valencia",
        facetId: "valencia",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Islas Canarias",
        modelName: "SimpleFilter",
        selected: false,
        id: "canarias",
        value: "canarias",
        facetId: "canarias",
        type: "provincia",
        totalResults: 1,
      },
      {
        label: "Islas Baleares",
        modelName: "SimpleFilter",
        selected: false,
        id: "baleares",
        value: "baleares",
        facetId: "baleares",
        type: "provincia",
        totalResults: 1,
      },
    ],
  },
  {
    title: "Sector",
    content: [
      {
        label: "Industria",
        modelName: "SimpleFilter",
        selected: false,
        id: "industria",
        value: "industria",
        facetId: "industria",
        type: "sector",
        totalResults: 1,
      },
      {
        label: "Agricultura",
        modelName: "SimpleFilter",
        selected: false,
        id: "agricultura",
        value: "agricultura",
        facetId: "agricultura",
        type: "sector",
        totalResults: 1,
      },
      {
        label: "Cultura",
        modelName: "SimpleFilter",
        selected: false,
        id: "cultura",
        value: "cultura",
        facetId: "cultura",
        type: "sector",
        totalResults: 1,
      },
      {
        label: "Hostelería",
        modelName: "SimpleFilter",
        selected: false,
        id: "hostelería",
        value: "hostelería",
        facetId: "hostelería",
        type: "sector",
        totalResults: 1,
      },
    ],
  },
  {
    title: "Año",
    content: [
      {
        label: "2019",
        modelName: "SimpleFilter",
        selected: false,
        id: "2019",
        value: "2019",
        facetId: "2019",
        type: "año",
        totalResults: 1,
      },
      {
        label: "2020",
        modelName: "SimpleFilter",
        selected: false,
        id: "2020",
        value: "2020",
        facetId: "2020",
        type: "año",
        totalResults: 1,
      },
      {
        label: "2021",
        modelName: "SimpleFilter",
        selected: false,
        id: "2021",
        value: "2021",
        facetId: "2021",
        type: "año",
        totalResults: 1,
      },
      {
        label: "2022",
        modelName: "SimpleFilter",
        selected: false,
        id: "2022",
        value: "2022",
        facetId: "2022",
        type: "año",
        totalResults: 1,
      },
    ],
  },
  {
    title: "Periodo",
    content: [
      {
        label: "Primer trimestre",
        modelName: "SimpleFilter",
        selected: false,
        id: "primer",
        value: "primer",
        facetId: "primer",
        type: "periodo",
        totalResults: 1,
      },
      {
        label: "Segundo trimestre",
        modelName: "SimpleFilter",
        selected: false,
        id: "segundo",
        value: "segundo",
        facetId: "segundo",
        type: "periodo",
        totalResults: 1,
      },
      {
        label: "Tercer trimestre",
        modelName: "SimpleFilter",
        selected: false,
        id: "tercer",
        value: "tercer",
        facetId: "tercer",
        type: "periodo",
        totalResults: 1,
      },
    ],
  },
  {
    title: "Tipo Beneficiario",
    content: [
      {
        label: "PYME",
        modelName: "SimpleFilter",
        selected: false,
        id: "PYME",
        value: "PYME",
        facetId: "PYME",
        type: "tipo beneficiario",
        totalResults: 1,
      },
      {
        label: "Gran Empresa",
        modelName: "SimpleFilter",
        selected: false,
        id: "GranEmpresa",
        value: "Gran Empresa",
        facetId: "GranEmpresa",
        type: "tipo beneficiario",
        totalResults: 1,
      },
      {
        label: "Personas físicas que no desarrollan actividad económica",
        modelName: "SimpleFilter",
        selected: false,
        id: "pfn",
        value: "PERSONAS FÍSICAS QUE NO DESARROLLAN ACTIVIDAD ECONÓMICA",
        facetId: "pfn",
        type: "tipo beneficiario",
        totalResults: 1,
      },
      {
        label: "Personas jurídicas que desarrollan actividad económica",
        modelName: "SimpleFilter",
        selected: false,
        id: "pjn",
        value: "PERSONAS JURÍDICAS QUE NO DESARROLLAN ACTIVIDAD ECONÓMICA",
        facetId: "pjn",
        type: "tipo beneficiario",
        totalResults: 1,
      },
      {
        label: "Sin información específica",
        modelName: "SimpleFilter",
        selected: false,
        id: "SIN INFORMACION ESPECIFICA",
        value: "SIN INFORMACION ESPECIFICA",
        facetId: "SIN INFORMACION ESPECIFICA",
        type: "tipo beneficiario",
        totalResults: 1,
      },
    ],
  },
];

// Several tags for example
export const relatedTagsSample: filterType[] = [
  {
    label: "Asturias",
    modelName: "SimpleFilter",
    selected: false,
    id: "asturias",
    value: "asturias",
    facetId: "asturias",
    type: "provincia",
    totalResults: 1,
  },
  {
    label: "Industria",
    modelName: "SimpleFilter",
    selected: false,
    id: "industria",
    value: "industria",
    facetId: "industria",
    type: "sector",
    totalResults: 1,
  },
  {
    label: "2019",
    modelName: "SimpleFilter",
    selected: false,
    id: "2019",
    value: "2019",
    facetId: "2019",
    type: "año",
    totalResults: 1,
  },
];

// Several bids for example
export const bidResultsSample: bidType[] = [
  {
    modelName: "grant",
    id: "1111",
    name: "grant1",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "1211",
    name: "Ejemplo de nombre un poco largo par ver cómo queda",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "1231",
    name: "grant3",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "2234",
    name: "grant4",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "2222",
    name: "grant5",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "2224",
    name: "grant6",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "3234",
    name: "grant7",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "3334",
    name: "grant8",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
  {
    modelName: "grant",
    id: "1334",
    name: "grant9",
    dateStart: "10/06/2022",
    dateFinish: "10/06/2022",
    amount: "1000000€",
    procurer: "José María Llorián",
    relatedTags: relatedTagsSample,
  },
];

export const bidSample: APIResponseType = {
  modelName: "Result",
  id: "546623-E24707531",
  finalidad: "AGRICULTURA, PESCA Y ALIMENTACIÓN",
  NUTS: "ES41",
  url_bases_regul:
    "http://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32013R1306&from=ES",
  region_impacto: "CASTILLA Y LEON",
  importe: 628.65,
  sector_beneficiario:
    "Producción agrícola combinada con la producción ganadera",
  beneficiario: "EL PALOMAR TITULARIDAD COMPARTIDA",
  tipo_beneficiario: "PYMES",
  ayuda_equivalente: 628.65,
  score: 1.5,
  importe_total: 1257279569, //Total quantity destined to the grant by the government
  apli_presupuestaria: "2022-3101 G/412B01/47033/0",
  instrumento: "SUBVENCIÓN Y ENTREGA DINERARIA SIN CONTRAPRESTACIÓN ",
  "CIF/NIF": "E24707531",
  codigo_bdns: 546623,
  departamento: "DGPAC",
  titulo_convocatoria:
    "PYME Y PERSONAS FÍSICAS QUE DESARROLLAN ACTIVIDAD ECONÓMICA",
  organo: "",
  administracion: "CASTILLA Y LEÓN",
  fecha_concesion: "21/03/2022",
};
