import{ createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'x-rapidapi-key': 'a91ee0f72dmsh1a77773593a2004p1efa11jsnfd41884aa1c3',
    'x-rapidapi-host': 'news-api14.p.rapidapi.com'
} 
const baseUrl = 'https://news-api14.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNewsApi: builder.query({
      query: (count) => 
        createRequest(`v2/trendings?topic=Cryptocurrency&language=en&country=us=${count}`)
      }
    )
  })
})

export const {
  useGetCryptoNewsApiQuery
} = cryptoNewsApi