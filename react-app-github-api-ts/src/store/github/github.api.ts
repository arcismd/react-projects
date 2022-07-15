import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query({
            query: () => ({
                url: 'search/users'
            })
        })
    })
})

const {useSearchUsersQuery} = githubApi