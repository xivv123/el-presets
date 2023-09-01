
<script setup lang="ts">
import { ref } from 'vue'

const selectedDate = ref('')
const datePickerRef = ref()
const fields = ref([{
  type: 'input',
  label: '测试',
  transKey: 'no',
  inputStyleLength: 150
},{
  type: 'input',
  label: '测试',
  transKey: 'no',
  inputStyleLength: 150
},{
  type: 'input',
  label: '测试',
  transKey: 'no',
  inputStyleLength: 150,
  isBtn: true,
  btnClick: () =>{},
  btnValue: 'asdas'
},{
  type: 'text',
  label: '测试',
  transKey: 'no',
  value: '我在测试'
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


const sendRequest = async () => {
  // 在这里调用你的接口
  // 这只是一个示例，你需要替换为你的实际接口调用
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

</script>

<template>
  <div style="height: 300px; width: 700px; border: 1px solid blue">
  <elPresets-form 
    :fields="fields" 
    labelWidth="100px"
  ></elPresets-form>
  <el-button-group>
  <elPresets-async-button
    type="primary"
    circle 
    :disableDuringCountdown="false" 
    :action="sendRequest" 
    :countdown-time="160"
    label="点击我即可发送 oh"
    countdownLabel="{count} 秒后可以重新发送"/>
    <el-button type="primary" circle >点击它可以发送</el-button>
   </el-button-group>
  </div>

  <elPresets-ctrl :attrs="{ 'el-button1':{type: 'primary', disabled: true},
                            'el-button2':{type: 'primary', disabled: false} }">
    <template #default="{ attrs }">
        <el-button v-bind="attrs['el-button1']">我是个按钮1</el-button>
        <el-button v-bind="attrs['el-button2']">我是个按钮2</el-button>
    </template>
  </elPresets-ctrl>

  <!-- <elPresets-ctrl :attrs="{ 'el-button1':{type: 'primary', disabled: true, visible: false},
  'el-button2':{type: 'primary', disabled: false, visible: true} }">
    <template #default="{ attrs }">
      <el-button v-bind="attrs['el-button1']" v-show="attrs['el-button1'].visible">我是个按钮1</el-button>
      <el-button v-bind="attrs['el-button2']" v-show="attrs['el-button2'].visible">我是个按钮2</el-button>
    </template>
  </elPresets-ctrl> -->
</template>

<style scoped></style>
