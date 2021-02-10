<template>
    <div class="todo-block__box">
        <div class="todo-block">
            <div class="todo-block__head">
                <textarea class="todo-block__textarea"></textarea>
                <button class="todo-block__button">
                    <img class="todo-button__img" src="../assets/plus.svg">
                </button>
            </div>
            <TodoNode/>
        </div>
    </div>
</template>

<script lang="ts">
import TodoNode from './TodoNode.vue';
import { Component,Vue } from "vue-property-decorator";


@Component({
    components: {
        TodoNode,
    },
})


export default class TodoInputBlock extends Vue {


}
</script>

<style scoped>
    .todo-block__box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-top: 100px;
    }
    .todo-block {
        width: 500px;
        min-height: 400px;
        padding: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.2);
    }
    .todo-block__textarea {
        width: 100%;
        height: 80px;
        font-size: 20px;
        border: none;
        outline: none;
        resize: none;
        border-radius: 5px;
        padding: 10px;
        background-color: #EAEAEA;
    }
    .todo-block__head {
        position: relative;
        margin-bottom: 50px;
    }
    .todo-block__button {
        position: absolute;
        bottom: -15%;
        right: 0;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        border: none;
        outline: none;
        background-color: #4AD295;
    }
    .todo-block__button:hover {
        background-color: #44C189;
        cursor: pointer;
    }
    .todo-button__img {
        width: 20px;
        height: 20px;
    }
</style>