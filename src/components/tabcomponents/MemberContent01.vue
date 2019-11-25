<template>
<div class="game-content">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="錢包餘額" prop="name">
            <span><b>{{currency}}</b>{{balance}}</span>
        </el-form-item>
        <el-form-item label="支付選項" prop="pay">
            <el-select v-model="ruleForm.pay" placeholder="請選擇支付選項">
            <el-option label="VISA" value="VISA"></el-option>
            <el-option label="BITCON" value="BITCON"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="銀行類型" prop="bank">
            <el-select v-model="ruleForm.bank" placeholder="請選擇銀行">
            <el-option label="銀行一" value="bank1"></el-option>
            <el-option label="銀行二" value="bank2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="充值" prop="deposit">
            <el-input type="number" size="small" style="width: 190px;" 
            v-model.number="ruleForm.deposit" 
            @keyup.native="handChange" 
            onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
            oninput="if(value.length>10)value=value.slice(0,10)" 
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">確認送出</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
import Vue from 'vue'; 
export default {
    name: 'MemberContent01',
     data() {
      return {
        currency: '$',
        balance: '8888888888888888888888',
        ruleForm: {
          pay: '',
          bank: '',
          deposit: ''
        },
        rules: {
          pay: [
            { required: true, message: '請選擇支付選項', trigger: 'change' }
          ],
          bank: [
            { required: true, message: '請選擇銀行類型', trigger: 'change' }
          ],
          deposit: [
            { required: true, message: '請填入金額'},
            { type: 'number', message: '金額必須為數字'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handchange() {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
    },
    components: {

    }
}
</script>
<style lang="scss" >
@import './../../styles/main';

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
 
input[type="number"] {
    -moz-appearance: textfield;
}

</style>


