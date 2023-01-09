import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { DatabaseDataset, DatabaseDatasetData } from '../models/api.types';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => `/?database_code=WIKI&api_key=${process.env.REACT_APP_QUANDL_API_KEY}`,
            transformResponse: (response: DatabaseDataset) => {
                return response.datasets.map((item: any) => ({
                    id: item.id,
                    value: item.dataset_code,
                    label: item.name.startsWith("Untitled Dataset") ? item.dataset_code : item.name,
                }));
            },
        }),

        getCompanyDataset: builder.query({
            query: (dataset_code: string) => `/WIKI/${dataset_code}/data.json?column_index=4&order=asc&api_key=${process.env.REACT_APP_QUANDL_API_KEY}`,
            transformResponse(response: DatabaseDatasetData) {
                return response?.dataset_data?.data
            },
        }),
    }),
})

export const {
    useGetCompaniesQuery,
    useLazyGetCompaniesQuery,
    useGetCompanyDatasetQuery,
    useLazyGetCompanyDatasetQuery
} = api