<template>
    <main class="page-container">
        <Catalog />
    </main>
</template>

<script>
    import Catalog from '@/components/catalog/Catalog.vue'

    export default {
        components: { Catalog }
    }
</script>

<style scoped>
    .page-container {
        max-width: 1860px;
        width: 100%;
        height: 100%;
        min-height: 100vh;
    }
</style>
