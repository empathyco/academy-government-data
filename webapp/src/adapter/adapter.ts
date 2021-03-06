import {
  DEPENDENCIES,
  EmpathyAdapterBuilder,
  EmpathyFacetMapper,
  EmpathyNumberRangeFacetMapper,
  EmpathyRequestParamsMapper,
  EmpathySimpleFacetMapper,
  SearchAdapter,
  SearchRequest,
  SearchResponse,
  SuggestionsRequest,
  SuggestionsResponse,
} from "@empathyco/x-adapter";
import { RelatedTagsRequest, Result } from "@empathyco/x-types";
import { EmpathyEndpointsService } from "./empathy-endpoints.service";

export const adapter2 = new EmpathyAdapterBuilder()
  /*  .addMapper(resultMapper, 'results')
  .addMapper(bannerMapper, 'banners')
  .addMapper(promotedMapper, 'promoteds')
  .addMapper(priceFilterMapper, 'numberRangeFilter')
  .replaceClassRequestMapper(SearchRequestMapper)
*/ .setFeatureConfig("search", {
    endpoint: "http://localhost:8080/api/search",
    responsePaths: {
      results: "hits",
    },
  })
  .configureContainer((container) => {
    container.unbind(DEPENDENCIES.ResponseMappers.facets);
    container.bind(DEPENDENCIES.ResponseMappers.facets).to(EmpathyFacetMapper);
    //    container.bind(DEPENDENCIES.ResponseMappers.facets).to(HierarchicalFacetMapper);
    container
      .bind(DEPENDENCIES.ResponseMappers.facets)
      .to(EmpathyNumberRangeFacetMapper);
    container
      .bind(DEPENDENCIES.ResponseMappers.facets)
      .to(EmpathySimpleFacetMapper);
    //    container.bind(DEPENDENCIES.RequestMappers.Parameters.filtersValue).to(RequestFiltersMapper);
    container.bind(DEPENDENCIES.requestMappers).to(EmpathyRequestParamsMapper);
    container.rebind(DEPENDENCIES.endpointsService).to(EmpathyEndpointsService);
  })
  .setInstance("platform")
  .build();

export const adapter: SearchAdapter = {
  search(request: SearchRequest): SearchResponse {
    return fetch(`http://localhost:8080/api/search?q=${request.query}`)
      .then((response): any => (response.ok ? response.json() : {}))
      .then((responseData) => ({
        totalResults: responseData.hits.length,
        queryTagging: {
          url: "",
          params: {},
        },
        facets: [],
        banners: [],
        promoteds: [],
        results: responseData.hits.map(
          (rawResult: any): Result => ({
            modelName: "Result",
            id: rawResult.id,
            name: rawResult.source.originalTitle,
            identifier: { value: rawResult.id },
            images: [],
            rating: { value: 0 },
            price: { value: 0, originalValue: 0, hasDiscount: false },
            tagging: {},
            type: "default",
            url: "www.google.com",
            isWishlisted: false,
          })
        ),
      })) as any;
  },
  getRelatedTags(request: RelatedTagsRequest): Promise<{
    relatedTags: (
      | { modelName: string; query: string; tag: string }
      | { modelName: string; query: string; tag: string }
      | { modelName: string; query: string; tag: string }
    )[];
  }> {
    console.log({
      relatedTags: [
        { modelName: "RelatedTag", query: "q", tag: "tage??e" },
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
          type: "a??o",
        },
      ],
    });
  },
} as any; //TODO Implement rest of methods;
