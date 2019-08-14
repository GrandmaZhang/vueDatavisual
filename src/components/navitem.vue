<template>
  <header>
    <div class="header-content">
      <a class="logo">
        <img src="../assets/logo_t.png" />
      </a>
      <div class="header-search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="搜索网红" />
      </div>
      <div class="user">
        <button>我是网红</button>
        <button>我是广告主</button>
      </div>
      <ul class="tools">
        <li>
          <a>网红排行榜</a>
          <i class="fa fa-chevron-down"></i>
        </li>
        <li>
          <a>网红工具</a>
        </li>
        <li>
          <a>视频工具</a>
        </li>
        <li>
          <a>常见问题</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "navitem",
  data() {}
};
</script>

<style scoped lang="less">
@lightOrange: #f55345;
header {
  width: 100%;
  color: #fff;
  background: #0e004a;
}
.header-content {
  margin: 0 auto;
  min-width: 1200px;
  max-width: 1400px;
  padding: 16px 0;
  position: relative;
  z-index: 10009;
  height: 32px;
}
.logo {
  float: left;
  position: relative;
  bottom: 5px;
}
.header-content {
  div, ul, li{
    display: inline-block;
  }

}
.header-search {
  margin-left: 32px;
  position: relative;
  float: left;
}
.header-search{
  input{
    width: 312px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border-radius: 4px;
    padding-left: 32px;
    background: transparent;
    border: 1px solid #fff;
    outline: 0;
    color: #fff;
    position: relative;
  }
  input::-webkit-input-placeholder {
    color: #fff;
  }
  i {
    position: absolute;
    left: 10px;
    top: 9px;
  }
}
.user {
  float: right;
  button{
    height: 32px;
    padding: 0 16px;
    border: 1px solid #fff;
    outline: 0;
    cursor: pointer;
    font-weight: 400;
    margin-left: 16px;
    background: transparent;
    color: #fff;
    border-radius: 4px;
  }
  button:hover{
    color: @lightOrange;
    background: #fff;
  }
}
.tools {
  float: right;
  margin-top: 5px;
}
.tools{
  li{
    margin-right: 8px;
    a{
      padding: 10px 5px;
      cursor: pointer;
    }
    a:hover{
      border-bottom: 1px solid @lightOrange;
    }
  }
}
// .tools li {
//   margin-right: 8px;
// }
// .tools li a {
//   padding: 10px 5px;
//   cursor: pointer;
// }
// .tools li a:hover {
//   border-bottom: 1px solid @lightOrange;
// }
</style>
