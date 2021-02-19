<template>
      <div id="app">
            <Header/>
            <TodoInputBlock/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue';
import TodoInputBlock from './components/TodoInputBlock.vue';

export default defineComponent ({
    components: { Header, TodoInputBlock },
})
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Poppins;
    }
</style>
