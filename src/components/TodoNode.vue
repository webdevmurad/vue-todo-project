<template>
    <div class="todo-node__block">
        <div class="todo-node__color" v-bind:style="{backgroundColor: colorBackground}"></div>
        <div class="todo-node__text">
            <p>fggggg ggggggg ggggggggggggg ggggggggg</p>
        </div>
        <div class="todo-node__icons">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="todo-trash" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z" data-original="#000000" style=""/><path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" data-original="#000000" style=""/></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="todo-star" width="512" height="512" x="0" y="0" viewBox="0 0 511.98685 511" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" data-original="#ffc107" style=""/></g></svg>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';

@Component
export default class TodoNode extends Vue {
    colorBackground!: string

    created() {
        this.createColor()
    }

    createColor() {
        this.colorBackground = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

}

</script>

<style scoped>
    .todo-node__block {
        min-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        margin: 0 10px 10px 10px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
    }
    .todo-node__color {
        width: 7px;
        height: 7px;
        border-radius: 50px;
        margin-left: 10px;
    }
    .todo-node__text {
        max-width: 300px;
        height: auto;
    }
    .todo-node__icons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
    .todo-node__icons svg {
        margin: 0 3px;
    }
    .todo-star {
        width: 20px;
        height: 20px;
        fill: #D5D5D5;
    }
    .todo-star:hover {
        cursor: pointer;
        fill: #EBC969;
    }
    .todo-trash {
        width: 20px;
        height: 20px;
        fill: #D5D5D5;
    }
    .todo-trash:hover {
        cursor: pointer;
        fill: red;
    }
</style>