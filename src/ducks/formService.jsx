import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formService = createApi({
	reducerPath: 'form',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/',
    }),
    endpoints: (builder) => ({
        createForm: builder.mutation({
			query: (form) => ({
				url: 'form',
				method: 'POST',
				body: form,
			}),
		}),
    })
})
export const {
	useCreateFormMutation,
} = formService;