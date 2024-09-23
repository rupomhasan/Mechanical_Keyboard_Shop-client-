import { baseApi } from "../api/baseApi";


const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myProfile: builder.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      })
    }),
    getUser: builder.query({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      })
    }),
    createUser: builder.mutation({
      query: ({ file, ...data }) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("data", JSON.stringify(data));

        return {
          url: "/user/signup",
          method: "POST",
          body: formData,

        };
      },
    }),

    createAdmin: builder.mutation({
      query: ({ productInfo, file }) => {
        const formData = new FormData();

        formData.append("file", file);

        formData.append("data", JSON.stringify(productInfo));

        return {
          url: "/user/create-Admin",
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
    }),

  })
})


export const { useMyProfileQuery,
  useCreateAdminMutation, useGetUserQuery, useCreateUserMutation, useDeleteUserMutation

} = userApi;