export type seriesType = {
  content: {
    name: string;
    data: {
      value: number;
      name: string;
    }[];
  }[];
};

export type filterFamilyType = {
  title: string;
  content: filterType[];
};

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
