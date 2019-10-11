<template>
  <div id="app">
      <header>
        <b>《</b>
        <span>多加网</span>
      </header>
      <main><router-view/></main>
      <footer>
        <router-link to="/home" tag="span">首页</router-link>
        <router-link to="/me" tag="span">我的</router-link>
      </footer>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
#app,html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header{
  height: 44px;
  width: 100%;
  background: #000;
  color: aliceblue;
  line-height: 44px;
  display: flex;
  b{
    flex: 2;
  }
  span{
    flex: 8;
    text-align: center;
  }
}
main{
 flex: 1;
 overflow: auto;
}
footer{
  height: 44px;
  width: 100%;
  background: #999;
  display: flex;
  span{
    flex: 1;
    text-align: center;
    line-height: 44px;
  }
}
.active{
  color: red;
}
</style>
