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
        list: []
    } as ItemsState,
    reducers: {
        deleteAll: (state) => {
            state.list = [];
        },
        createItem: (state, action) => {
            state.list.push(action.payload);
        }
    }
})


export const { deleteAll, createItem } = itemsSlice.actions;
export const store = configureStore({
    reducer: itemsSlice.reducer
});

store.subscribe(() => {
    console.log(store.getState());
})