<template>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 el-presets !</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="confirmDialog">确 定</el-button>
      </span>
    </el-dialog>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { ElDialog, ElButton } from 'element-plus';
  
  const props = defineProps({
    visible: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:visible', 'confirm']);
  
  const closeDialog = () => {
    emit('update:visible', false);
  };
  
  const confirmDialog = () => {
    emit('confirm');
    emit('update:visible', false);
  };
  </script>