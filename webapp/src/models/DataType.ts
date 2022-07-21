// Type of the series data passed to the charts components.
// Essentially, an array of series with name and an array that contains the data.
export type seriesType = {
  content: {
    name: string;
    data: {
      value: number;
      name: string;
    }[];
  }[];
};

// Collection of filters with a title name that represents the type of every filter
export type filterFamilyType = {
  title: string;
  content: filterType[];
};

// Type that contains several attributes for the filters with the same format as the expected in the adapter
export type filterType = {
  label: string;
  modelName: string;
  selected: boolean;
  id: string;
  value: string;
  facetId: string;
  type: string;
  totalResults: number;
};

// Type of the bid that contains the essential information and an array of the filters that applies to it
export type bidType = {
  modelName: string;
  id: string;
  name: string;
  dateStart: string;
  dateFinish: string;
  amount: string;
  procurer: string;
  relatedTags: filterType[];
};
