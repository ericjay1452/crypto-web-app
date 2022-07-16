import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


// const  NewsHeaderToken = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '72889d58efmshba9d495bc37ed6dp19aec5jsn97b99fd0655f',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com' 
// }

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.REACT_APP_CRYPTONEWS_API_KEY,
  'x-rapidapi-host': process.env.REACT_APP_CRYPTONEWS_HOST,
};

const BaseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;