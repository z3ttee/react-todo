import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TodoItemEntity } from "../components/todo-item/todo-item";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


interface ItemsState {
    list: TodoItemEntity[];
}


const itemsSlice = createSlice({
    name: "items",
    initialState: {
        list: [
            new TodoItemEntity("Title 1", "Beschreibung 2"),
            new TodoItemEntity("Title 1", "Beschreibung 2")
        ]
    } as ItemsState,
    reducers: {
        deleteAll: (state) => {
            state.list = [];
        }
    }
})


export const { deleteAll } = itemsSlice.actions;
export const store = configureStore({
    reducer: itemsSlice.reducer
});

store.subscribe(() => {
    console.log(store.getState());
})