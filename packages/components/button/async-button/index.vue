<template>
    <el-button @click="handleClick" :disabled="disableDuringCountdown && countdown > 0">
      <transition name="fade">
        <template v-if="countdown > 0" key="countdown">{{ countdownLabel.replace('{count}', countdown) }}</template>
        <template v-else key="label">{{ label }}</template>
      </transition>
    </el-button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { ElButton } from 'element-plus';
  
  const props = defineProps({
    action: {
      type: Function,
      required: true
    },
    countdownTime: {
      type: Number,
      default: 60
    },
    disableDuringCountdown: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: '发送'
    },
    countdownLabel: {
      type: String,
      default: '{count} 秒后重新发送'
    }
  });
  
  const countdown = ref(0);
  let intervalId: number | null = null;
  
  const handleClick = async () => {
  countdown.value = props.countdownTime;
  try {
    await props.action();
    intervalId = window.setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        if (intervalId !== null) {
          window.clearInterval(intervalId);
        }
      }
    }, 1000);
  } catch (error) {
    console.error(error);
    countdown.value = 0; // 如果操作失败，重置倒计时
  }
};
  
  onMounted(() => {
    watch(() => props.countdownTime, (newVal) => {
      if (countdown.value === 0) {
        countdown.value = newVal;
      }
    });
  });
  </script>
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>