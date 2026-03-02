<script lang="ts">

export default defineComponent({
  name: "BrInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    block: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "input",
    "focusout",
    "keyup",
    "keydown",
    "focus",
    "keypress",
    "click",
  ],
  setup(props: InputProps, { emit }: { emit: InputRangeEmits }) {
    const inputValue = ref(props.value);
    const isFocused = ref(false);

    const classes = computed(() => [
      "br-input",
      `br-input--${props.size}`,
      {
        "br-input--block": props.block,
        "br-input--error": props.error,
        "br-input--disabled": props.disabled,
        "br-input--focused": isFocused.value,
      },
    ]);

    watch(
      () => props.value,
      (newValue: string | number | boolean) => {
        inputValue.value = newValue;
      },
    );

    const onInput = (ev: Event) => {
      const value = (ev.target as HTMLInputElement).value;

      if (props.type === "number") {
        const valueNumber = Number(value);

        if (props.min && valueNumber < props.min) {
          emit("input", null);
          return;
        }

        emit("input", valueNumber);
        return;
      }

      if (props.type === "checkbox") {
        const valueBoolean = (ev.target as HTMLInputElement).checked;
        emit("input", valueBoolean);
        return;
      }

      emit("input", value);
    };

    return {
      inputValue,
      classes,
      isFocused,
      onInput,
    };
  },
});
</script>

<template>
  <input
    ref="inputEl"
    v-model="inputValue"
    :class="classes"
    :disabled="disabled"
    :type="type"
    :placeholder="placeholder"
    :min="min"
    :max="max"
    :value="inputValue"
    :maxlength="maxLength"
    :readonly="readonly"
    @input="onInput($event)"
    @focusout="$emit('focusout', $event)"
    @keyup="$emit('keyup', $event)"
    @keydown="$emit('keydown', $event)"
    @focus="$emit('focus', $event)"
    @keypress="$emit('keypress', $event)"
    @click="$emit('click', $event)"
  />
</template>

<style lang="scss" scoped>
.br-input {
  font-family: var(--br-font-primary);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-sm);
  background: var(--neutralLightGrey9);
  color: var(--neutralDarkGrey7);
  transition: all var(--br-transition-fast);

  &::placeholder {
    color: var(--neutralDarkGrey9);
  }

  &:focus {
    outline: none;
    border-color: var(--brandPrimary6);
    box-shadow: 0 0 0 3px rgba(109, 54, 251, 0.1);
  }

  &--sm {
    height: 36px;
    padding: 0 var(--br-space-3);
    font-size: var(--br-text-xs);
  }

  &--md {
    height: 44px;
    padding: 0 var(--br-space-4);
    font-size: var(--br-text-sm);
  }

  &--lg {
    height: 56px;
    padding: 0 var(--br-space-4);
    font-size: var(--br-text-base);
  }

  &--block {
    width: 100%;
  }

  &--error {
    border-color: var(--auxiliaryRed6);

    &:focus {
      border-color: var(--auxiliaryRed6);
      box-shadow: 0 0 0 3px rgba(255, 46, 46, 0.1);
    }
  }

  &--disabled {
    background: var(--neutralLightGrey6);
    color: var(--neutralDarkGrey9);
    cursor: not-allowed;
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
