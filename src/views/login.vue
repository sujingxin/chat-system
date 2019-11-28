<template>
  <div class="login">
    <div class="login-nav">
      <p>chat-system</p>
      <p class="second-title">Powered by 昔忆落落 by Vue-cli3 & ElementUI</p>
      <a class="second-title">了解更多...</a>
    </div>
    <div class="user-login">
      <p>Chat Login</p>
      <hr />
      <p>User Name</p>
      <el-input placeholder="Enter UserName" v-model="userName" clearable> </el-input>
      <br />
      <br>
      <el-button type="primary" :loading="true">login</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    msg: String
  },
  data(){
      return{
          userName: ''
      }
  }
};
</script>

<style lang="scss" scoped>
.login{
  position: relative;
  width: 100%;
  font-size: 30px;
  text-align: center;
  .login-nav{
    position: relative;
    width: 100%;
    height: 300px;
    padding-top: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 800;
    background: #B0C4DE;
    .second-title{
      font-size: 20px;
    }
  }
  .user-login{
    position: relative;
    left: 50%;
    width: 400px;
    height: 340px;
    font-size: 25px;
    font-weight: 600;
    transform: translate(-50%);
  }
}
</style>
