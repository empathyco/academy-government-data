import {
  SearchAdapter,
  SearchRequest,
  SearchResponse,
  SuggestionsRequest,
  SuggestionsResponse,
} from "@empathyco/x-adapter";
import { RelatedTagsRequest, Result } from "@empathyco/x-types";
import { EmpathyEndpointsService } from "./empathy-endpoints.service";
import { APIResponseType } from "@/models/APIResponseType";

// This adapter is what communicates between the x-components and the API
export const adapter: SearchAdapter = {
  // The search will be called and return the response each time a search petition is made by a Search component
  search(request: SearchRequest): SearchResponse {
    // This is more or less the way the search works (I don't really understand, but it is what it is)
    return fetch(
      `http://localhost:8080/query/governmentdata/search?query=${request.query}&lang=en`
    )
      .then((response): any => (response.ok ? response.json() : {}))
      .then((responseData) => ({
        totalResults: 1,
        queryTagging: {
          url: "",
          params: {},
        },
        facets: [],
        banners: [],
        promoteds: [],
        results: responseData.catalog.content.map(
          (rawResult: any): APIResponseType => ({
            modelName: "Result",
            id: rawResult.codigo_bdns + "-" + rawResult["CIF/NIF"],
            finalidad: rawResult.finalidad,
            NUTS: rawResult.NUTS,
            url_bases_regul: rawResult.url_bases_regul,
            region_impacto: rawResult.region_impacto,
            importe: rawResult.importe,
            sector_beneficiario: rawResult.sector_beneficiario,
            beneficiario: rawResult.beneficiario,
            tipo_beneficiario: rawResult.tipo_beneficiario,
            ayuda_equivalente: rawResult.ayuda_equivalente,
            score: rawResult.score,
            importe_total: rawResult.importe_total,
            apli_presupuestaria: rawResult.apli_presupuestaria,
            instrumento: rawResult.instrumento,
            "CIF/NIF": rawResult["CIF/NIF"],
            codigo_bdns: rawResult.codigo_bdns,
            departamento: rawResult.departamento,
            titulo_convocatoria: rawResult.titulo_convocatoria,
            organo: rawResult.organo,
            administracion: rawResult.administracion,
            fecha_concesion: rawResult.fecha_concesion,
          })
        ),
      })) as any;
  },
  // Returns the related tags (will have to be substituted by an actual call to the API)
  getRelatedTags(request: RelatedTagsRequest): Promise<{
    relatedTags: (
      | { modelName: string; query: string; tag: string }
      | { modelName: string; query: string; tag: string }
      | { modelName: string; query: string; tag: string }
    )[];
  }> {
    console.log({
      relatedTags: [
        { modelName: "RelatedTag", query: "q", tag: "tageñe" },
        { modelName: "RelatedTag", query: "q", tag: "tag2" },
        { modelName: "RelatedTag", query: "q", tag: "tag3" },
      ],
    });
    return Promise.resolve({
      relatedTags: [
        { modelName: "RelatedTag", query: "q", tag: "tag1" },
        { modelName: "RelatedTag", query: "q", tag: "tag2" },
        { modelName: "RelatedTag", query: "q", tag: "tag3" },
      ],
    });
  },
  // Returns the suggestions given a search request (will have to be substituted by an actual call to the API)
  getSuggestions(request: SuggestionsRequest): Promise<SuggestionsResponse> {
    console.log({
      suggestions: [
        { modelName: "Suggestion", facets: [], key: "suggestion1", query: "q" },
        {
          modelName: "Suggestion",
          facets: [],
          key: "suggestion2",
          query: "qu",
        },
        {
          modelName: "Suggestion",
          facets: [],
          key: "suggestion3",
          query: "que",
        },
      ],
    });
    return Promise.resolve({
      suggestions: [
        {
          modelName: "QuerySuggestion",
          facets: [],
          key: "asturias",
          query: "Asturias",
          type: "provincia",
        },
        {
          modelName: "QuerySuggestion",
          facets: [],
          key: "industria",
          query: "Industria",
          type: "sector",
        },
        {
          modelName: "QuerySuggestion",
          facets: [],
          key: "2019",
          query: "2019",
          type: "año",
        },
      ],
    });
  },
} as any; //TODO Implement rest of methods;
