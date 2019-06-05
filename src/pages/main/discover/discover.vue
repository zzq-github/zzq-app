<template>
  <div class="wrap">
    <div class="cell_wrap">
      <img slot="icon" src="../../../assets/icon/pengyouquan.png" width="24" height="24" style="margin-right:6px;">
      <div class="cell_one">
        <span class="cell_title">朋友圈</span>
        <Icon type="ios-arrow-forward" size="22" style="color:#e8eaec; display:block;"/>
      </div>
    </div>
    <!-- <div style="margin-bottom:12px;">
      <mt-cell title="朋友圈" is-link icon="iconfont icon-pengyouquanicon">
        <img slot="icon" src="../../../assets/icon/pengyouquan.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="扫一扫" is-link>
        <img slot="icon" src="../../../assets/icon/saoyisao.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
      <mt-cell title="摇一摇" is-link>
        <img slot="icon" src="../../../assets/icon/yaoyiyao.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="看一看" is-link>
        <img slot="icon" src="../../../assets/icon/kanyikan.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
      <mt-cell title="搜一搜" is-link>
        <img slot="icon" src="../../../assets/icon/souyisou.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="附近的人" is-link>
        <img slot="icon" src="../../../assets/icon/fujinderen.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="购物" is-link>
        <img slot="icon" src="../../../assets/icon/gouwu.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
      <mt-cell title="游戏" is-link>
        <img slot="icon" src="../../../assets/icon/youxi.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="小程序" is-link>
        <img slot="icon" src="../../../assets/icon/xiaochenxv.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'discover',
  data () {
    return {
      selected: '1',
      switchValue: true
    }
  }
}
</script>
<style scoped>
/* body, html {
  width: 100%;
  height: 100%;
  background: #f8f8f9;
} */
.wrap {
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  width: 100%;
  height: 100%;
  background: #f8f8f9;
  font-size: 24px;
  font-weight: 500;
}
.cell_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.cell_wrap {
  width: 100%;
  margin: 0 auto;
  padding: 10px 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.cell_one {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.cell_title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  display: block;
}
</style>
