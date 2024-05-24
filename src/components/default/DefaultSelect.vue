<template>
    <div class="select-container">
        <select :id="id" class="select" v-model="selected">
            <option v-for="item in data" :key="item.value" :value="item.value">
                {{ item.text }}
            </option>
        </select>
        <span class="focus-border"></span>
    </div>
</template>

<script>
    export default {
        data: () => ({
            selected: ''
        }),
        props: {
            id: {
                type: String,
                required: true
            },
            data: {
                type: Array,
                required: true
            },
            select: {
                type: String,
                default: ''
            }
        },
        watch: {
            select(nextValue) {
                this.selected = nextValue
            }
        }
    }
</script>

<style scoped>
    :focus {
        outline: none;
    }

    .select-container {
        min-width: 200px;
        position: relative;
    }

    .select {
        width: 100%;
        background-color: transparent;
        color: var(--color-text);
        letter-spacing: 1px;
        padding: 15px 5px 5px 0px;
        border: 0;
        border-bottom: 1px solid var(--color-border);
    }

    option {
        color: var(--color-background);
    }

    .select ~ .focus-border {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: var(--color-hover);
        transition: 0.4s;
    }

    .select:focus ~ .focus-border,
    .select:not(:focus):valid ~ .focus-border {
        width: 100%;
        left: 0;
    }
</style>
