<template>
    <article class="card-container">
        <div class="card-image">
            <img :src="item.image" :alt="item.name" />
        </div>
        <div class="card-info">
            <div class="card-info-section info-status">
                <h2 class="card-name">{{ item.name }}</h2>
                <div class="card-status">
                    <span :class="['status', item.status.toLocaleLowerCase()]"></span>
                    <span class="status-name">{{ item.status }}-{{ item.species }}</span>
                </div>
            </div>
            <div class="card-info-section info-place">
                <span class="place">Last known location:</span>
                <span class="place-name">{{ item.location.name }}</span>
            </div>
            <div class="card-info-section info-place">
                <span class="place">First seen in:</span>
                <span class="place-name">{{ item.origin.name }}</span>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .card-container {
        width: 600px;
        height: 220px;
        display: flex;
        background-color: var(--carg-background);
        border-radius: 0.5rem;
        overflow: hidden;

        .card-image {
            width: 100%;
            flex: 2 1 0%;

            img {
                max-width: 100%;
                max-height: 300px;
                width: 100%;
                height: 100%;
                object-position: center center;
                object-fit: cover;
            }
        }

        .card-info {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            flex: 3 1 0;
            gap: 0.5rem;
            padding: 0.75rem;

            .card-name {
                font-size: 1.5rem;
            }

            .card-status {
                display: flex;
                flex: 1 1 0;
                justify-content: flex-start;
                align-items: center;
                gap: 0.5rem;

                .status {
                    width: 0.5rem;
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;

                    &.alive {
                        background-color: var(--card-status-alive);
                    }

                    &.dead {
                        background-color: var(--card-status-dead);
                    }

                    &.unknown {
                        background-color: var(--card-status-unknown);
                    }
                }
            }

            .card-info-section {
                display: flex;
                flex-direction: column;
                flex: 0 0 0;
                gap: 0;

                .place {
                    color: var(--color-border);
                }

                .place-name {
                    font-size: 1.1rem;
                }
            }
        }

        @media (max-width: 576px) {
            width: 100%;
            height: inherit;
            flex-direction: column;
        }
    }
</style>
