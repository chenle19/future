<template>
  <div class="login-contar bkg">
    1
  </div>
</template>

<script>
  import { ref, reactive,watchEffect,   } from 'vue';
export default {
  setup() {
    const loginFrom = reactive({
      userName:'',
      passWord:''
    })
    const submit = ()=>{
      console.table(loginFrom);
    }
    const stop = watchEffect(() => {
      /* ... */
    })

    // 删除watchEffect监听
    const queryUserInfo = function() {
      // return new Promise((resolve,reject)=>{
      //   setTimeout(()=>{
      //   resolve(50)
      // },1000)
    }
    stop()
    watchEffect(() => {
      // 异步api调用，返回一个操作对象
      const apiCall = queryUserInfo()

      // onInvalidate(() => {
      //   // 取消异步api的调用。
      //   apiCall.cancel()
      // })
    })
    const changeColor = (e) => {
      console.log(e.target.value);
      const bkg =  document.querySelectorAll('.bkg')
      console.log(bkg);
      bkg.forEach(item => {
        console.log(item);
        item.style.cssText += 'background:'+ e.target.value
        localStorage.bkg = e.target.value
      })
      // bkg.style.background = e.target.value
    }
    return {
      loginFrom,
      changeColor,
      submit,
    }
  }
}
</script>

<style lang="scss" scoped>

.login-contar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .colorType {
    align-self: flex-end;
    width: 50px;
    margin: 0 auto;
  }
  .login-box {
    margin:  auto;
    border-radius: 62px;
    box-shadow:  31px 31px 61px #b66b52,-31px -31px 61px #ffbf92;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    // flex-wrap: wrap;
    // align-items: center;
    .logo {
      margin: 0 auto;
      margin-bottom: 40px;
      width: 300px;
      height: 100px;
    }
    .el-form {
      width: 400px;
      box-sizing: border-box;
      width: 100%;
      // padding-right:24px;
      .el-form-item {
        padding-right: 24px;
      }
      .button{
        font-size: 16px;
        color: #fd9572;
        width: 60px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        margin: 0 auto;
        // margin-top: 20px;
        text-align: center;
        border-radius: 55px;
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        box-shadow:  14px 14px 28px #e6e6e6,-14px -14px 28px #fd9572;
      }
      .button:hover{
        box-shadow: inset 20px 20px 53px #d9d9d9,
            inset -20px -20px 53px #ffffff;
      }
    }
  }
}
</style>