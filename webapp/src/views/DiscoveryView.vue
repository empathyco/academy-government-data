<template>
  <div>
    <h1>Explora</h1>
    <p>Aquí verás todo lo que necesites de las subvenciones</p>
    <BarChart :series="getDataBarChart" />
    <BubbleChart :series="getData"></BubbleChart>
    <WordCloud :series="getDataSingleSerie"></WordCloud>
    <PieChart :series="getDataSingleSerie"></PieChart>
  </div>
</template>

<script>
import BubbleChart from "@/components/insights/BubbleChart";
import WordCloud from "@/components/insights/WordCloud";
import PieChart from "@/components/insights/PieChart";
import BarChart from "@/components/insights/BarChart";

export default {
  name: "DiscoveryView",
  components: { BubbleChart, WordCloud, PieChart, BarChart },
  computed: {
    getDataSingleSerie() {
      return {
        content: [
          {
            name: "Genres",
            data: [
              {
                value: 9,
                name: "News",
              },
              {
                value: 1338,
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
    },
    getData() {
      return {
        content: [
          {
            name: "Genres",
            data: [
              {
                // name property is used for the datalabel
                // value property is used for the volume of the bubble
                value: 312,
                name: "Documentary",
              },
              {
                value: 351,
                name: "Short",
              },
            ],
          },
          {
            name: "Genres",
            data: [
              {
                value: 217,
                name: "Animation",
              },
              {
                value: 832,
                name: "Comedy",
              },
              {
                value: 349,
                name: "Romance",
              },
              {
                value: 46,
                name: "Sport",
              },
            ],
          },
          {
            name: "Genres",
            data: [
              {
                value: 9,
                name: "News",
              },
              {
                value: 1338,
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
          {
            name: "Genres",
            data: [
              {
                value: 10,
                name: "Game-Show",
              },
              {
                value: 12,
                name: "Talk-Show",
              },
              {
                value: 32,
                name: "Reality-TV",
              },
            ],
          },
        ],
      };
    },
    getDataBarChart() {
      return {
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
    },
  },
};
</script>

<style scoped></style>
