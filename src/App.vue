<template>
      <div id="app">
            <Header/>
            <TodoInputBlock/>
      </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import TodoInputBlock from './components/TodoInputBlock.vue';


@Component({
  components: {
      Header,
      TodoInputBlock,
  },
})
export default class App extends Vue {}
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
