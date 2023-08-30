
<script setup lang="ts">
import { ref } from 'vue'

const selectedDate = ref('')
const datePickerRef = ref()
const fields = ref([{
  type: 'input',
  label: '测试',
  transKey: 'no',
  inputStyleLength: 200
},{
  type: 'input',
  label: '测试',
  transKey: 'no',
  inputStyleLength: 200
},{
  type: 'input',
  label: '测试',
  transKey: 'no',
  inputStyleLength: 200,
  isBtn: true,
  btnClick: () =>{},
  btnValue: 'asdas'
},{
  label: 'Username',
  type: 'input',
  transKey: 'username',
  rules: [
    { required: true, trigger: 'none' },
    { 
      validator: (rule:any, value:any, callback:any) => {
        if (!value) {
          callback();
        } else if (value.length < 3 || value.length > 5) {
          callback(new Error('长度在 3 到 5 个字符'));
        } else {
          const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
          if (specialChars.test(value)) {
            callback(new Error('用户名不能包含特殊字符'));
          } else {
            callback();
          }
        }
      }, 
      trigger: 'change' 
    }
  ]
},])

const focusDatePicker = () => {
  datePickerRef.value?.focus()
}
</script>

<template>
    <!-- 1212 -->
  <elPresets-form :fields="fields" labelWidth="200px"></elPresets-form>
</template>

<style scoped></style>
