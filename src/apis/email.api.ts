import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Email } from '../types/email.type';

export const emailApi = createApi({
  reducerPath: 'email-api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: () => '/emails',
    }),
    sendEmail: builder.mutation({
      query: (email: Email) => ({
        url: '/emails',
        method: 'POST',
        body: email,
      }),
    }),
  }),
});

export const { useGetEmailsQuery, useSendEmailMutation } = emailApi;
