import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Email } from '../types/email.type';
import { TagTypes } from './tag-types.enum';

export const emailApi = createApi({
  reducerPath: 'email-api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: [TagTypes.Email],
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: () => '/emails',
      providesTags: [TagTypes.Email],
    }),
    sendEmail: builder.mutation({
      query: (email: Email) => ({
        url: '/emails',
        method: 'POST',
        body: email,
      }),
      invalidatesTags: [TagTypes.Email]
    }),
  }),
});

export const { useGetEmailsQuery, useSendEmailMutation } = emailApi;
