<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch } from "vue";
import BrDropdownItem from "../../atoms/BrDropdownItem/BrDropdownItem.vue";
import type { IOptionType, FormSelectProps } from "./types";

const props = withDefaults(defineProps<FormSelectProps>(), {
  label: "Select",
  typeLabel: "default",
  preSelectedOption: () => ({ value: "", label: "", state: "default" }),
  options: () => [
    { value: "1", label: "Option 1", state: "default" },
    { value: "2", label: "Option 2", state: "default" },
    { value: "3", label: "Option 3", state: "default" },
  ],
  message: null,
  messageError: "",
  isRequired: false,
  scrollAmmount: 5,
});

const emit = defineEmits<{
  (e: "itemSelected", value: IOptionType): void;
}>();

const emptyOption = ref<IOptionType>({
  value: "",
  label: "",
  state: "default",
});
const isStateActivated = ref(false);
const isFilled = ref(false);
const selectWrapper = ref<HTMLElement | null>(null);
const status = ref("default");
const optionsData = ref<IOptionType[]>([]);
const option = ref<IOptionType>({ value: "", label: "", state: "default" });

const isScrollEnabled = computed(
  () => props.options.length > props.scrollAmmount,
);

const dropdownStyle = computed(() => {
  if (isScrollEnabled.value) {
    return { maxHeight: `${props.scrollAmmount * 44}px` };
  }
  return {};
});

const isError = computed(() => props.message !== null);

const colorMessage = computed(() =>
  isError.value ? "var(--auxiliary-color-red-600)" : "var(--neutralLightGrey2)",
);

const isOptionSelected = computed(() => {
  const optionEmpty = Object.keys(option.value).length === 0;
  const optionValueEmpty = option.value?.value === "";
  return !optionEmpty && !optionValueEmpty;
});

function initializeOption(): void {
  if (props.preSelectedOption.value !== "") {
    option.value = props.preSelectedOption;
    isFilled.value = true;
    status.value = "filled";
    updateOptionsDataWithOptionSelected(props.preSelectedOption);
  }
}

function handleStateActivated(): void {
  const isCurrentlyActivated = status.value === "activated";
  isStateActivated.value = !isCurrentlyActivated;

  if (isCurrentlyActivated) {
    const hasOptionSelected = option.value?.value !== "";
    status.value = hasOptionSelected ? "filled" : "default";
    return;
  }

  status.value = "activated";
}

function updateOptionsDataWithOptionSelected(
  selectedOption: IOptionType | null,
): void {
  const updatedOptions = props.options.map((opt) => ({
    ...opt,
    state:
      selectedOption && opt.value === selectedOption.value
        ? "activated"
        : "default",
  }));
  optionsData.value = updatedOptions as IOptionType[];
}

function removeOptionSelected(): void {
  status.value = "default";
  isFilled.value = false;
  option.value = emptyOption.value;
  isStateActivated.value = false;
  updateOptionsDataWithOptionSelected(null);
}

function addOptionSelected(selectedOption: IOptionType): void {
  isFilled.value = true;
  handleStateActivated();
  option.value = selectedOption;
}

function handleOptionSelected(selectedOption: IOptionType): void {
  const isOptionSelectedEqualOldOption =
    option.value?.value === selectedOption.value;

  if (isOptionSelectedEqualOldOption) {
    emit("itemSelected", emptyOption.value);
    removeOptionSelected();
    return;
  }

  updateOptionsDataWithOptionSelected(selectedOption);
  emit("itemSelected", selectedOption);
  addOptionSelected(selectedOption);
}

function handleOutsideClick(event: MouseEvent): void {
  if (
    isStateActivated.value &&
    selectWrapper.value &&
    !selectWrapper.value.contains(event.target as Node)
  ) {
    handleStateActivated();
  }
}

watch(
  () => ({
    options: props.options,
    preSelectedOption: props.preSelectedOption,
  }),
  ({ options, preSelectedOption }) => {
    optionsData.value = options.map((opt: IOptionType) => {
      const item = opt as IOptionType;

      if (item.state === "activated") {
        option.value = { ...item, state: "default" };
        isFilled.value = true;
      }

      return { ...item };
    });

    const isAllOptionsDefault = optionsData.value.every(
      (opt: IOptionType) => opt.state === "default",
    );
    if (isAllOptionsDefault) {
      option.value = { value: "", label: "", state: "default" };
      isFilled.value = false;
    }

    if (preSelectedOption) {
      initializeOption();
    }
  },
  { immediate: true },
);

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
  initializeOption();
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>

<template>
  <div
    ref="selectWrapper"
    class="br-form-select"
    :class="{
      'br-form-select--required': isRequired,
      'br-form-select--activated-container': isStateActivated,
    }"
  >
    <div
      :class="[
        'br-form-select__trigger',
        typeLabel,
        { 'br-form-select__trigger--error': isError || messageError },
        { 'br-form-select__trigger--activated': isStateActivated },
      ]"
    >
      <div class="br-form-select__box" @click="handleStateActivated">
        <div class="br-form-select__content">
          <span
            v-show="isFilled"
            class="br-form-select__floating-label"
            :style="{
              color: isStateActivated
                ? 'var(--brandPrimary6)'
                : 'var(--neutralLightGrey6)',
            }"
          >
            {{ label }}
          </span>
          <span v-show="!isFilled" class="br-form-select__placeholder">
            {{ label }}
          </span>
          <BrDropdownItem
            v-if="isOptionSelected"
            :text="option?.label"
            :state="option?.state as any"
            :is-selected="true"
          />
        </div>
        <div class="br-form-select__icon">
          <svg
            class="br-form-select__chevron"
            :class="{ 'br-form-select__chevron--up': isStateActivated }"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        v-if="isError"
        class="br-form-select__message"
        :style="{ color: colorMessage }"
      >
        {{ message }}
      </div>
    </div>

    <div
      v-if="isStateActivated"
      class="br-form-select__dropdown"
      :class="{ 'br-form-select__dropdown--scroll': isScrollEnabled }"
      :style="dropdownStyle"
    >
      <BrDropdownItem
        v-for="(opt, index) in optionsData"
        :key="index"
        :text="opt?.label"
        :state="opt?.state as any"
        @onclick="handleOptionSelected(opt)"
      />
    </div>
    <div v-if="messageError" class="br-form-select__error">
      {{ messageError }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.br-form-select {
  position: relative;
  font-family: var(--br-font-primary, inherit);

  &--activated-container {
    z-index: 9999;
  }

  &__trigger {
    position: relative;
    border: 1px solid var(--br-light-300, #d1d5db);
    border-radius: 8px;
    background: var(--br-light-0, #fff);
    transition: border-color 0.2s ease;

    &--activated {
      border-color: var(--brandPrimary6, #6d36fb);
    }

    &--error {
      border-color: var(--auxiliary-color-red-600, #dc2626);
    }
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    min-height: 52px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    justify-content: center;
  }

  &__floating-label {
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 2px;
    transition: color 0.2s ease;
  }

  &__placeholder {
    font-size: 14px;
    color: var(--neutralLightGrey1, #9ca3af);
  }

  &__icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    flex-shrink: 0;
  }

  &__chevron {
    width: 20px;
    height: 20px;
    color: var(--br-dark-700, #374151);
    transition: transform 0.2s ease;

    &--up {
      transform: rotate(180deg);
    }
  }

  &__message {
    padding: 4px 16px 8px;
    font-size: 12px;
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    z-index: 9999;
    background: var(--br-light-0, #fff);
    border: 1px solid var(--br-light-300, #d1d5db);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    overflow-y: auto;
    max-height: 240px;

    &--scroll {
      max-height: 240px;
    }
  }

  &__error {
    margin-top: 4px;
    font-size: 12px;
    color: var(--auxiliary-color-red-600, #dc2626);
    padding: 0 4px;
  }
}
</style>
