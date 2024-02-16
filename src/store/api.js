import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hotelsApi = createApi({
  reducerPath: 'hotelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://map.aviasales.ru/supported_directions.json?origin_iata=LED&one_way=false&locale=ru',
  }),
  endpoints: (builder) => ({

    hotels: builder.query({
      query: () => '',
    }),
  }),
});
export const { useHotelsQuery } = hotelsApi;