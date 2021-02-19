import { MutationTree } from 'vuex'
import {State, TodoItem} from "@/store/state";

export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItems = 'SET_ITEMS',
    CompleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING',
    DeleteItem = 'DELETE_ITEM'
}

export type Mutations = {
    [MutationType.CreateItem](state: State, item: TodoItem): void;
    [MutationType.SetItems](state: State, items: TodoItem[]): void;
    [MutationType.CompleteItem](state: State, item: Partial<TodoItem> & { id: number }): void;
    [MutationType.SetLoading](state: State, value: boolean): void;
    [MutationType.DeleteItem](state: State, value: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateItem](state: any, item: any) {
        state.items.push(item)
    },
    [MutationType.SetItems](state: any, items: any) {
        state.items = items
    },
    [MutationType.CompleteItem](state: any, newItem: any) {
        const item = state.items.findIndex((s: any) => s.id === newItem.id)
        if (item === -1) return
        state.items[item] = {...state.items[item], ...newItem}
    },
    [MutationType.SetLoading](state: any, value: any) {
        state.loading = value
    },
    [MutationType.DeleteItem](state: any, value: any) {
        state.items = state.items.filter(function(item: any) {
            return item.id !== value
        })
    }
}