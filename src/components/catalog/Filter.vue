<template>
    <form role="search" @submit.prevent="search" class="search-form" novalidate>
        <DefaultInputText id="search" ref="search" :current-value="currentValue" />
        <DefaultSelect
            ref="status"
            id="status"
            :data="charactersStatuses"
            :select="currentStatus"
        />
        <DefaultButton type="submit">Применить</DefaultButton>
    </form>
</template>

<script>
    import DefaultInputText from '@/components/default/DefaultInputText.vue'
    import DefaultSelect from '@/components/default/DefaultSelect.vue'
    import DefaultButton from '@/components/default/DefaultButton.vue'
    import { statuses } from '@/data/index.js'

    export default {
        data: () => ({
            charactersStatuses: statuses
        }),
        props: {
            currentStatus: {
                type: String,
                default: ''
            },
            currentValue: {
                type: String,
                default: ''
            }
        },
        methods: {
            search() {
                let status = this.$refs.status.selected
                let name = this.$refs.search.value
                this.$emit('search', { status, name })
            }
        },
        components: { DefaultInputText, DefaultSelect, DefaultButton }
    }
</script>

<style scoped>
    .search-form {
        display: flex;
        justify-content: center;
        gap: 0.8rem;

        @media (max-width: 576px) {
            flex-direction: column;
        }
    }
</style>
