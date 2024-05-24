<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
    .button {
        height: 2.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0 1rem;
        white-space: nowrap;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-background);
        background-color: var(--color-text);
        border-radius: 2.5rem;
        border: none;
        transition: background-color 0.3s ease;
        cursor: pointer;

        @media (hover: hover) {
            &:hover {
                background-color: var(--color-hover);
            }
        }

        @media (hover: none) {
            &:active {
                background-color: var(--color-hover);
            }
        }
    }
</style>
