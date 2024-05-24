<template>
    <div class="input-container">
        <div class="custom-input">
            <input :id="id" :type="type" class="input" v-model="value" required />
            <label :for="id" class="placeholder">Name</label>
            <span class="focus-border"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            value: ''
        }),
        props: {
            id: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'text'
            },
            currentValue: {
                type: String,
                default: ''
            }
        },
        watch: {
            currentValue(nextValue) {
                this.value = nextValue
            }
        }
    }
</script>

<style scoped>
    :focus {
        outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #ffffff;
        box-shadow: inset 0 0 20px 20px #00000000;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;

        .custom-input {
            width: 100%;
            position: relative;

            .input {
                width: 100%;
                background-color: transparent;
                color: var(--color-text);
                letter-spacing: 1px;
                padding: 15px 5px 5px 0px;
                border: 0;
                border-bottom: 1px solid var(--color-border);
            }

            .placeholder {
                letter-spacing: 1px;
                color: var(--color-border);
                position: absolute;
                top: 13px;
                left: 0;
                pointer-events: none;
                transition: 0.4s;
            }

            .input:focus ~ .placeholder,
            .input:not(:focus):valid ~ .placeholder {
                font-size: 0.6rem;
                color: var(--color-text);
                top: 0;
            }

            .input ~ .focus-border {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 2px;
                background-color: var(--color-hover);
                transition: 0.4s;
            }

            .input:focus ~ .focus-border,
            .input:not(:focus):valid ~ .focus-border {
                width: 100%;
                left: 0;
            }
        }
    }
</style>
