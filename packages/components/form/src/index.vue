<template>
  <el-form ref="formCommon" :model="form" :label-width="labelWidth">
    <el-row :gutter="20">
      <el-col :span="(field.col ? field.col : 12) || 24" v-for="field in fields" :key="field.label">
        <el-form-item :label="field.label + ':'" class="form-item-bottom">
          <el-input
            v-if="field.type === 'input' && field.transKey" 
            v-model="form[field.transKey]" 
            @input="updateForm"
            :style="{width: field.inputStyleLength + 'px'}"
            clearable
          />
          <el-select 
            v-else-if="field.type === 'select' && field.transKey" 
            v-model="form[field.transKey]" 
            @change="updateForm"
            @focus="keyFlag = false"
            :style="{width: field.inputStyleLength + 'px'}"
          >
            <el-option
              v-for="item in field.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span 
            v-else-if="field.type === 'text'"
          >
            {{ field.computeF ? computedVals[field.label] : field.value}}
          </span>
          <el-button 
            v-if="field.isBtn"
            @click="field.btnClick"
            size="small"
          >
            {{ field.btnValue }}
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, PropType } from 'vue';
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElRow, ElCol } from 'element-plus';

interface Field {
  label: string;
  type: string;
  col?: number;
  transKey?: string;
  inputStyleLength?: number;
  options?: { label: string; value: string }[];
  computeF?: string;
  value?: string;
  isBtn?: boolean;
  btnClick?: () => void;
  btnValue?: string;
  isTran?: boolean;
  transVal?: any;
}

const props = defineProps({
  fields: {
    type: Array as PropType<Field[]>,
    required: true
  },
  labelWidth: {
    type: String,
    default: '100px'
  }
});

const emit = defineEmits(['up']);

const form = ref<{ [key: string]: any }>({});
const keyFlag = ref(true);

const computedVals = computed(() => {
  const vals: { [key: string]: any } = {};
  props.fields.forEach((i: any) => {
    if (i.type === 'text' && i.computeF) {
      vals[i.label] = form.value[i.computeF] || '';
    }
  });
  return vals;
});

onMounted(() => {
  props.fields.forEach((field: any) => {
    if (field.isTran === true) {
      form.value[field.transKey] = field.transVal;
    }
  });
});

const updateForm = () => {
  emit('up', form.value);
};
</script>

<style scoped>
  .form-item-bottom {
    margin-bottom: 20px !important;
  }
</style>