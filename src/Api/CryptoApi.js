import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const ApiHeaderToken = {
    'X-RapidAPI-Key': '72889d58efmshba9d495bc37ed6dp19aec5jsn97b99fd0655f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    
}

const RootUrl = "https://coinranking1.p.rapidapi.com";

const CreatedRequest = (url) =>({url, headers : ApiHeaderToken})

export const FetchedCryptoApi = createApi({

    reducerPath : "cryptoApi",
    baseQuery :fetchBaseQuery({baseUrl: RootUrl}),
    endpoints : (builder) =>({
        getCryptos : builder.query({
            // query parameter for 20 cryptos 
            query : (count) => CreatedRequest(`/coins?limit=${count }`)
    })
    })
})

export const { useGetCryptosQuery } = FetchedCryptoApi
