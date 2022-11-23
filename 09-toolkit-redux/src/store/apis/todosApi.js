import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  //   especifiar el nombre de la api
  reducerPath: "todos",
  // la base de la url
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  // irían los endpoints
  endpoints: (builder) => ({
    // concatenar el endpoint con la baseUrl "https://jsonplaceholder.typicode.com/todos"
    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

// Crea custom hooks para usar en los componentes
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
