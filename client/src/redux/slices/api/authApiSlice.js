import { apiSlice } from "../apiSlice";

const AUTH_URL = "/user"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data,
                credentials: true,
            }),
        }),
        register: builder.mutation({
            query: (body) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}/logout`,
                method: "POST",
            }),
        }),
        me: builder.query({
            query: () => ({
                url: `${AUTH_URL}/me`,
                method: "GET",
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useMeQuery } = authApiSlice;