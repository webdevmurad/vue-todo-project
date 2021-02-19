<template>
  <div class="header">
      <div class="header-logo">
          <div class="header-line header-first__line"></div>
          <div class="header-line header-center__line"></div>
          <div class="header-line header-last__line"></div>
      </div>
      <div class="header-logo__text">
          <h3>ToDo Vue</h3>
      </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent ({

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .header {
        margin: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-logo:hover {
        cursor: pointer;
    }

    .header-line {
        margin: 3px 0;
    }

    .header-first__line {
        width: 30px;
        height: 5px;
        background-color: #4AD295;
    }

    .header-center__line {
        width: 40px;
        height: 5px;
        background-color: #4AD295;
    }

    .header-last__line {
        width: 20px;
        height: 5px;
        background-color: #4AD295;
    }
</style>
