<template>
  <div class="login">
    <h2 id="animate" class="lightSpeedIn animated">Animate.css</h2>
    <div class="form-container">
      <div class="form">
        <div class="owl-login" ref="owlLogin">
          <div class="hand hand-left"></div>
          <div class="hand hand-right"></div>
          <div class="arms">
            <div class="arm arm-left"></div>
            <div class="arm arm-right"></div>
          </div>
        </div>
        <h3 class="login-title">登录</h3>
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="50"
          label-position="left"
          inline
        >
          <FormItem prop="username">
            <label slot="label">
              <Icon type="md-person" :size="iconSize" style="padding:0"/>
            </label>
            <Input v-model="formValidate.username" placeholder="用户名" style="width:200px"></Input>
          </FormItem>
          <FormItem prop="password">
            <label slot="label">
              <Icon type="ios-unlock" :size="iconSize" style="padding:0"/>
            </label>
            <Input
              v-model="formValidate.password"
              placeholder="密码"
              type="password"
              @on-focus="onFocusPwd"
              @on-blur="onBlurPwd"
              size="large"
              style="width:200px"
            ></Input>
          </FormItem>
        </Form>
        <div class="submit" ref="subbtn">
          <Button type="primary" long class="submit-btn" @click="onSubmit($event)">登录</Button>
          <span ref="ripple" class="ripple"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconSize: 28,
      formValidate: {
        username: "",
        password: ""
      },
      ruleValidate: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(e) {
      // setInterval(()=>{
      //   this.addRippleEffect(e);
      // },1000)
      this.addRippleEffect(e);
      this.checkForm();
    },
    checkForm() {
      setTimeout(() => {
        this.$router.push({ name: "home" });
      },1000);
    },
    addRippleEffect(e) {
      const btnWrap = this.$refs.subbtn;
      const offset = { left: e.offsetX, top: e.offsetY };
      const sideLength =
        btnWrap.offsetWidth > btnWrap.offsetHeight
          ? btnWrap.offsetWidth
          : btnWrap.offsetHeight;
      this.$refs.ripple.style.left = offset.left - sideLength / 2 + "px";
      this.$refs.ripple.style.top = offset.top - sideLength / 2 + "px";
      this.$refs.ripple.style.width = sideLength + "px";
      this.$refs.ripple.style.height = sideLength + "px";
      if (this.$refs.ripple.classList.contains("show")) {
        this.$refs.ripple.classList.remove("show");
      }
      setTimeout(() => {
        this.$refs.ripple ? this.$refs.ripple.classList.add("show") : "";
      }, 100);
    },
    onFocusPwd() {
      this.$refs.owlLogin.classList.add("password");
    },
    onBlurPwd() {
      this.$refs.owlLogin.classList.remove("password");
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  height: 100%;
  background: url("../assets/images/snow.jpg") 50% 50% repeat/cover;
}
.login-title {
  margin-bottom: 40px;
}
.form {
  width: 400px;
  /* padding: 40px 80px; */
  /* border: 1px solid; */
  border-radius: 4px;
  text-align: center;
  background: #f0f8ff;
  position: relative;
}
.owl-login {
  position: absolute;
  width: 210px;
  height: 108px;
  background: url("../assets/images/owl-login.png");
  top: -100px;
  left: 50%;
  margin-left: -105px;
}
.password .hand-left {
  transform: translateX(42px) translateY(-15px) scale(0.7);
}
.password .hand-right {
  transform: translateX(-42px) translateY(-15px) scale(0.7);
}
.hand {
  width: 34px;
  height: 34px;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  background-color: #472d20;
  -webkit-transform: scaleY(0.6);
  -moz-transform: scaleY(0.6);
  -o-transform: scaleY(0.6);
  -ms-transform: scaleY(0.6);
  transform: scaleY(0.6);
  -webkit-transition: 0.3s ease-out;
  -moz-transition: 0.3s ease-out;
  -o-transition: 0.3s ease-out;
  -ms-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  position: absolute;
  bottom: -8px;
}
.arms {
  top: 58px;
  position: absolute;
  width: 100%;
  height: 41px;
  overflow: hidden;
}
.arm {
  width: 40px;
  height: 65px;
  position: absolute;
  top: 40px;
  background-image: url("../assets/images/owl-login-arm.png");
  transition: 0.3s ease-out;
}
.password .arm-left {
  transform: translateY(-40px) translateX(40px);
}
.password .arm-right {
  transform: translateY(-40px) translateX(-40px) scaleX(-1);
}
.arm-left {
  left: 20px;
  transform: rotate(-20deg);
}
.arm-right {
  left: 158px;
  transform: rotate(20deg);
}
.hand-left {
  left: 14px;
}
.hand-right {
  left: 170px;
}
.form-container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
}
.form /deep/ .ivu-form .ivu-form-item-label {
  padding: 2px 0 0 0;
}
.submit {
  position: relative;
  overflow: hidden;
  margin-top: 40px;
}
.submit-btn {
  position: relative;
}
.submit-btn.ivu-btn:hover {
  background-color: #2d8cf0;
  border-color: #2d8cf0;
}
.ripple {
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 100%;
  transform: scale(0);
  pointer-events: none;
}
.ripple.show {
  animation: ripple 0.75s ease-out;
}
@keyframes ripple {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
#animate {
  text-align: left;
  padding-left: 20px;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
.animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: translateX(-10%) skewX(30deg);
    -ms-transform: translateX(-10%) skewX(30deg);
    transform: translateX(-1 0%) skewX(30deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}
</style>