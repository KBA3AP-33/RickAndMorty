<template>
    <section class="catalog-container">
        <Filter
            class="catalog-filter"
            @search="changeSearch"
            :current-status="status"
            :current-value="currentSearch"/>
        <div class="catalog-items">
            <div class="items">
                <CatalogItem v-for="item in catalogItems" :key="item.id" :item="item" />
            </div>
        </div>
        <div class="catalog-pagination" v-if="requestInfo">
            <DefaultButton
                class="prev"
                v-if="requestInfo.prev !== null"
                @click="changePage(currentPage - 1)">
                <
            </DefaultButton
            >
            <DefaultPagination
                :pages-count="Number(requestInfo.pages)"
                :current-page="currentPage"
                @changePage="changePage"/>
            <DefaultButton
                class="next"
                v-if="requestInfo.next !== null"
                @click="changePage(currentPage + 1)">
                >
            </DefaultButton
            >
        </div>
    </section>
</template>

<script>
    import Filter from '@/components/catalog/Filter.vue'
    import CatalogItem from '@/components/catalog/CatalogItem.vue'
    import DefaultPagination from '@/components/default/DefaultPagination.vue'
    import DefaultButton from '@/components/default/DefaultButton.vue'
    import { getCharactersByFilterParams } from '@/api'

    export default {
        data: () => ({
            requestInfo: {},
            catalogItems: [],
            currentPage: 1,
            status: '',
            currentSearch: ''
        }),
        async mounted() {
            let params = window.sessionStorage.getItem('params')
            params = params !== null ? JSON.parse(params) : { page: 1, status: '', name: '' }
            this.currentPage = Number(params.page)
            this.status = params.status
            this.currentSearch = params.name
            await this.search(params)
        },
        methods: {
            async changeSearch(params) {
                await this.search(params)
                this.currentPage = 1
            },
            async search(params) {
                let result = await getCharactersByFilterParams(params)
                window.sessionStorage.setItem('params', JSON.stringify(params))
                this.requestInfo = result.info
                this.catalogItems = result.results
            },
            async changePage(page) {
                this.currentPage = page
                let params = window.sessionStorage.getItem('params')
                await this.search(
                    params !== null ? { ...JSON.parse(params), page: this.currentPage } : {}
                )
            }
        },
        components: { Filter, CatalogItem, DefaultPagination, DefaultButton }
    }
</script>

<style scoped>
    .catalog-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        padding: 0.8rem;

        .catalog-items {
            flex-grow: 1;

            .items {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 0.8rem;

                @media (max-width: 1860px) {
                    justify-content: center;
                }
            }
        }

        .catalog-pagination {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 0.8rem;

            @media (max-width: 576px) {
                .button {
                    height: 2rem;
                    font-size: 0.5rem;
                    padding: 0 0.8rem;
                }
            }

            @media (max-width: 480px) {
                .button {
                    height: 1.5rem;
                    font-size: 0.45rem;
                    padding: 0 0.5rem;
                }

                .prev,
                .next {
                    display: none;
                }
            }
        }
    }
</style>
