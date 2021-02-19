
import {Mutations, MutationType} from "@/store/mutations";
import { State } from './state'
import { ActionContext, ActionTree } from "vuex";

export enum ActionTypes {
    GetTodoItems = 'GET_ITEMS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
}

export type Actions = {
    [ActionTypes.GetTodoItems](context: ActionAugments): void;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GetTodoItems]({ commit }) {
        commit(MutationType.SetLoading, true)

        await sleep(1000)

        commit(MutationType.SetLoading, false)
        commit(MutationType.SetItems, [])
    }
}