<template>
  <el-form ref="formCommon" :model="form" :label-width="labelWidth">
    <el-row :gutter="20">
      <!-- 默认两列，可根据配置项自定义列数 -->
      <el-col :span="(field.col ? field.col : 12) || 24" v-for="field in fields" :key="field.label">
        <el-form-item :label="field.label + ':'" class="form-item-bottom">
          <!-- 输入数据直接绑定到入参参数中 -->
          <el-input
            v-if="field.type === 'input'" 
            v-model="form[field.transKey]" 
            @input="updateForm"
            :style="{width: field.inputStyleLength + 'px'}"
            clearables
          />
          <el-select 
            v-else-if="field.type === 'select'" 
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
            size="mini"
          >
            {{ field.btnValue }}
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Form, FormItem, Input, Select, Option, Button, Row, Col } from 'element-ui';

@Component({
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Select.name]: Select,
    [Option.name]: Option,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col
  }
})
export default class form extends Vue {
  @Prop({ required: true, type: Array }) readonly fields!: any[];
  @Prop({ default: '100px', type: String }) readonly labelWidth!: string;

  keyboardStyle = { left: "5%", top: "94%" };
  keyFlag = true;
  form: { [key: string]: any } = {};

  get computedVals() {
    const vals: { [key: string]: any } = {};
    this.fields.forEach((i: any) => {
      if (i.type === 'text' && i.computeF) {
        vals[i.label] = this.form[i.computeF] || '';
      }
    });
    return vals;
  }

  created() {
    this.fields.forEach((field: any) => {
      if (field.isTran === true) {
        this.form[field.transKey] = field.transVal;
      }
    });
  }

  updateForm() {
    this.$emit('up', this.form);
  }
}
</script>

<style scoped>
  .form-item-bottom {
    margin-bottom: 20px !important;
  }
</style>