<template>
    <div>
        <TodoItem v-for="item in items" :key="item" v-bind="item"/>
    </div>
</template>

<script lang="ts">
import TodoItem from './TodoItem.vue';
import { useStore } from '@/store'
import { computed } from 'vue'
import { defineComponent } from "vue";

export default defineComponent ({
    components: {
        TodoItem,
    },
    setup() {
        const store = useStore()
        const items = computed(() => store.state.items)
        return { items }
    }
})

</script>

<style scoped>

</style>