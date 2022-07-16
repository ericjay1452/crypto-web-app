import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const  NewsHeaderToken = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '72889d58efmshba9d495bc37ed6dp19aec5jsn97b99fd0655f',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com' 
}

const RootUrl = 'https://bing-news-search1.p.rapidapi.com/';

const CreatedRequest = (url) =>({url, headers : NewsHeaderToken})

export const CryptoNewsApiBing = createApi({

    reducerPath : "CryptoNewsApi",
    baseQuery :fetchBaseQuery({baseUrl: RootUrl}),
    endpoints : (builder) =>({
        getCryptoNewsApi : builder.query({
            // query parameter for 20 cryptos 
            query : ({newsCategory, count}) => CreatedRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
    })

    
})

export const { useGetCryptoNewsApi } = CryptoNewsApiBing



