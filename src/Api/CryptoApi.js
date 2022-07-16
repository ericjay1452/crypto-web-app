import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const ApiHeaderToken = {
    'X-RapidAPI-Key': process.env.REACT_APP_FETCHED_API,
    'X-RapidAPI-Host': process.env.REACT_APP_FETCHED_HOST,
    
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
