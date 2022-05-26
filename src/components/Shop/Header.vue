<template>
    <div class="title">
        <span >{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<script setup>

    const props = defineProps({
        title: String
    })
</script>

<style scoped>
    .title {
        background-color: #c4c4ff;
    }
</style>
