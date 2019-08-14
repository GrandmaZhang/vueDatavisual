<template>
  <div class="page">
    <div class="pageContent">
      <h1 class="title">网红实时粉丝数</h1>
      <div class="searchWrapper">
        <input type="text" placeholder="你想看哪个网红的实时粉丝数量？" />
        <button>查看</button>
      </div>
      <div class="main">
        <div class="headImg">
          <a href="#">
            <img src="../assets/headImg.jpg" />
          </a>
        </div>
        <div class="kolname">办公室小野官方频道 Ms Yeah Official Channel</div>
        <div class="calc-wrapper">
          <span class="calc-inner">7,183,6123</span>
        </div>
        <div class="calc-title">
          <span>办公室小野官方频道 Ms Yeah Official Channel</span>
          <span>每秒更新网红实时粉丝量</span>
        </div>
        <div id="chartWrapper"></div>
        <div class="bottomSection">
          <div class="hot-channel">
            <span class="hotIcon"></span>
            <div class="hotUser">
              <img src="" alt="">
              <span></span>
            </div>
            <div class="hotUser">
              <img src="" alt="">
              <span></span>
            </div>
            <div class="hotUser">
              <img src="" alt="">
              <span></span>
            </div>
          </div>
          <div class="battle-channel"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    var mainChart = this.echarts.init(document.getElementById("chartWrapper"));
    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
          Math.round(value)
        ]
      };
    }

    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    var option = {
      tooltip: {
        trigger: "axis",
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " : " +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: "模拟数据",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }
      ]
    };
    mainChart.setOption(option);
    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      mainChart.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    }, 1000);
  }
};
</script>

<style scoped lang='less'>
.page {
  position: relative;
  background-image: url(../assets/background.jpg);
  background-position-y: -64px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 850px;
  overflow: hidden;
}
.pageContent {
  margin: 0 auto;
  width: 1200px;
  height: 850px;
  z-index: 10;
  position: relative;
}
.title {
  color: #fff;
  text-align: center;
  font-size: 46px;
  margin-top: 72px;
  font-weight: 300;
}
.page::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0e004a;
  opacity: 0.8;
}
.searchWrapper {
  text-align: center;
  margin-top: 24px;
}
.searchWrapper{
  input{
    width: 720px;
    height: 48px;
    background: #fff;
    border: 1px solid #fff;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 16px;
    font-size: 16px;
    outline: 0;
  }
  input::-webkit-input-placeholder {
    color: #cccccc;
    font-size: 16px;
  }
  button {
    font-size: 16px;
    color: #fff;
    font-family: din-regular;
    vertical-align: top;
    height: 52px;
    cursor: pointer;
    background-image: linear-gradient(135deg, #fa6d5a, #f74f6b 50%),
      linear-gradient(135deg, #f74f6b 50%, #f74f6b);
    background-size: 200%;
    border-radius: 0 2px 2px 0;
    line-height: 24px;
    position: relative;
    border: none;
    padding: 0 16px;
    outline: 0;
    margin-left: -5px;
  }
}
.main {
  width: 100%;
  height: 507px;
  background: #fff;
  border-radius: 4px;
  margin-top: 84px;
  position: relative;
  border: 1px solid #fff;
}
.headImg {
  text-align: center;
  margin-top: -44px;
  a {
    display: inline-block;
    width: 88px;
    height: auto;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #ccc;
      padding: 4px;
    }
  }
}
.kolname {
  text-align: center;
}
.calc-wrapper {
  text-align: center;
  margin: 16px 0;
}
.calc-inner {
  color: #333;
  font-size: 60px;
}
.calc-title {
  text-align: center;
}
#chartWrapper {
  width: 100%;
  height: 200px;
}
</style>
