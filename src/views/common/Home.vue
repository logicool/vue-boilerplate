<template>
  <div class="home-container">
    <div class="home-text">userName:{{userName}}</div>
    <div class="home-text">roles:<ul><li v-for='role in roles' :key='role'>{{role}}</li></ul></div>
    <button class='customButton'>Play</button>

    <div class="box">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <line class="top" x1="0" y1="0" x2="900" y2="0"/>
          <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
          <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
          <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
      </svg>
      <h3>SAT</h3>
      <span>接口验证工具</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'userName',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  &-container {
    height:calc(100% - 50px);
    width:100%;
    min-height: calc(100vh - 50px);
    min-width: 100vw;
    background: hsla(225, 36%, 19%, .9);
    display: flex;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

// 特效card
.box {
    width: 300px;
    height: 460px;
    position: relative;
    background: rgba(255,255,255,0);
    cursor: pointer;
    color: #fff;
    box-shadow: inset 0 0 0 3px hsla(0, 0%, 0%, 0.3);
    transition: background 0.4s 0.5s;
    text-align: center;
}
.box:hover {
    background: rgba(255,255,255,1);
    transition-delay: 0s;
}
.box h3 {
    font-size: 120px;
    line-height: 370px;
    margin: 0;
    font-weight: 400;
    width: 100%;
}
.box span {
    display: block;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    padding: 5px;
}
.box h3,
.box span {
    transition: color 0.4s 0.5s;
}
.box:hover h3,
.box:hover span {
    color: #FC4D04;
    transition-delay: 0s;
}
.box svg {
    position: absolute;
    top: 0;
    left: 0;
}
.box svg line {
    stroke-width: 3;
    stroke: #FC4D04;
    fill: none;
    transition: all .8s ease-in-out;
}
.box:hover svg line {
    transition-delay: 0.1s;
}
.box svg line.top,
.box svg line.bottom {
    stroke-dasharray: 330 240; 
}
.box svg line.left,
.box svg line.right {
    stroke-dasharray: 490 400;
}
.box:hover svg line.top {
    transform: translateX(-600px);
}
.box:hover svg line.bottom {
    transform: translateX(600px);
}
.box:hover svg line.left {
    transform: translateY(920px);
}
.box:hover svg line.right {
    transform: translateY(-920px);
}

// 特效按钮
.customButton {
  color: #FC4D04;
  background: transparent;
  border: 2px solid currentcolor;
  position: relative;
  margin: 1em 2rem;
  padding: 0.5em 1em;
  transition: all 0.3s ease-in-out;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    border-color: currentcolor;
    box-sizing: border-box;
    border-style: solid;
    width: 1em;
    height: 1em;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    top: -6px;
    left: -6px;
    border-width: 2px 0 0 2px;
    z-index: 5;
  }
  &:after {
    bottom: -6px;
    right: -6px;
    border-width: 0 2px 2px 0;
  }
  &:hover:before,&:hover:after {
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    border-color: #fff;
  }
  &:hover {
    color: #353535;
    background-color: #fff;
  }
  &:active, &:focus {
    outline: none;
  }
}




</style>