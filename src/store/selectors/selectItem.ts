import { RootState } from "../store";

export function selectItemById(state: RootState, itemId: string) {
    return state.list.find((item) => item.id === itemId);
}