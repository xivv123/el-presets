
<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from './DatePicker.vue'

const selectedDate = ref('')
const datePickerRef = ref()

const focusDatePicker = () => {
  datePickerRef.value?.focus()
}
</script>

<template>
  <div>
    <gk-button>Default</gk-button>
    <gk-button color="yellow">Primary</gk-button>
    <gk-button type="primary" circle :round="true">Primary</gk-button>
    <gk-button type="Warning">Success</gk-button>
    <gk-button type="danger">Danger</gk-button>
    <gk-button type="danger">Danger</gk-button>
    <gk-button type="success" >Danger</gk-button>
    <gk-button type="yellow" size="large">222</gk-button>
    <gk-button type="Warning" size="small">222</gk-button>
    <gk-button type="Warning" size="small">222</gk-button>
    <gk-button type="yellow" plain :size="['200px', '300px']">222</gk-button>
  </div>
1
  <gk-date-picker v-model="selectedDate" ref="datePickerRef" />
  <gk-input v-model="selectedDate" color="blue" shake="true" textColor="red" ref="datePickerRef" />
  <br />
  <gk-input v-model="selectedDate"  color="red"  textColor="yellow" ref="datePickerRef" />
  <br />

  <gk-input v-model="selectedDate" color="yellow" ref="datePickerRef" />
  <br />

  <gk-input v-model="selectedDate" shake="true" type="florid" ref="datePickerRef" />
  <gk-input v-model="selectedDate" shake="true" type="florid" ref="datePickerRef" />
  <br />

</template>

<style scoped></style>
