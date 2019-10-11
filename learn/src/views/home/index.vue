<template>
  <div class="wrap">
    <div class="source">
      <input type="text" placeholder="搜索门票/景点" />
    </div>
    <div class="swiper">
      <swiper>
        <swiper-slide v-for="(item,index) in imglist" :key="index">
            <img :src="item" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <div class="text">
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
        <div class="one">
            <span></span>
            <p>成单奖励</p>
        </div>
    </div>
    <div class="big">
        <p>金牌商家</p>
        <div class="clors"></div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imglist:[
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=507494507,290637918&fm=27&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=507494507,290637918&fm=27&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=507494507,290637918&fm=27&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=507494507,290637918&fm=27&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=507494507,290637918&fm=27&gp=0.jpg"
            ]
        }
    }
};
</script>

<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
}
.source {
  height: 40px;
  width: 100%;
  background: #0f0;
  input {
    width: 80%;
    height: 70%;
    margin: auto;
    border-radius: 20px;
    border: none;
    margin: 5px 40px;
  }
}
.swiper {
  width: 100%;
  height: 180px;
  background: red;
  img{
      width: 100%;
  height: 180px;
  }
}
.text {
  height: 200px;
  width: 100%;
  background: #954;
//   display: flex;
}
.big {
  width: 100%;
  height: 100px;
  background: rgb(185, 169, 165);
}
.clors{
    width: 60%;
  height: 70px;
  background: #0f0;
  border-radius: 20px;
}
.one{
    width: 67px;
    height: 60px;
    float: left;
    margin-left: 20px;
    
    // border: 1px solid #000;
    span{
        display: inline-block;
        width: 35px;
        height: 35px;
        background: red;
        border-radius: 50%;
        margin: 0 15px;
    }
    p{
        color: aliceblue;
    }
}
</style>