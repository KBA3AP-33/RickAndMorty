<template>
    <div class="pagination" v-if="pagesCount > 1">
        <DefaultButton
            v-for="page in getPages"
            :key="page"
            @click="changePage(Number(page))"
            :class="[Number(page) === currentPage && 'current']"
            style="transition-duration: 0s">
            {{ page }}
        </DefaultButton>
    </div>
</template>

<script>
    import DefaultButton from '@/components/default/DefaultButton.vue'

    export default {
        props: {
            pagesCount: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
        },
        methods: {
            changePage(page) {
                if (!isNaN(page)) {
                    this.$emit('changePage', page)
                }
            },
        },
        computed: {
            getPages() {
                if (this.pagesCount < 10)
                    return Array.from({ length: this.pagesCount }, (_, i) => `${i + 1}`)

                let first = 1,
                    second = this.pagesCount > 1 ? 2 : -1,
                    penultimate = this.pagesCount - 1,
                    last = this.pagesCount
                let skip = '...'

                return [
                    `${first}`,
                    `${second}`,
                    this.currentPage - 2 > second && skip,
                    this.currentPage > 1 && `${this.currentPage - 1}`,
                    this.currentPage ? `${this.currentPage}` : skip,
                    this.currentPage < last && `${this.currentPage + 1}`,
                    this.currentPage + 2 < penultimate && skip,
                    `${penultimate}`,
                    `${last}`
                ].filter(
                    (value, index, self) =>
                        (typeof value !== 'boolean' && index === self.findIndex((e) => e === value)) ||
                        value === skip
                )
            }
        },
        components: { DefaultButton }
    }
</script>

<style scoped>
    .pagination {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 10px;

        @media (max-width: 576px) {
            * {
                height: 2rem;
                font-size: 0.5rem;
                padding: 0 0.8rem;
            }
        }

        @media (max-width: 480px) {
            * {
                height: 1.5rem;
                font-size: 0.45rem;
                padding: 0 0.5rem;
            }
        }

        .current {
            background-color: var(--color-hover);
        }
    }
</style>
