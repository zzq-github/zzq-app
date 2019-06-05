<template>
  <div class="wrap">
    <div style="margin-bottom:12px;">
      <mt-cell title="支付" is-link icon="iconfont icon-pengyouquanicon">
        <img slot="icon" src="../../../assets/icon/zhifu.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="支付" is-link icon="iconfont icon-pengyouquanicon">
        <img slot="icon" src="../../../assets/icon/zhifu.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="收藏" is-link>
        <img slot="icon" src="../../../assets/icon/shoucang.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
      <mt-cell title="相册" is-link>
        <img slot="icon" src="../../../assets/icon/xiangce.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
      <mt-cell title="卡包" is-link>
        <img slot="icon" src="../../../assets/icon/kabao.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
      <mt-cell title="表情" is-link>
        <img slot="icon" src="../../../assets/icon/biaoqing.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
    <div style="margin-bottom:12px;">
      <mt-cell title="设置" is-link>
        <img slot="icon" src="../../../assets/icon/shezhi.png" width="25" height="25" style="margin-right:6px;">
      </mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      selected: '2'
    }
  }
}
</script>
<style scoped>
.wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f8f8f9;
  font-size: 24px;
  font-weight: 500;
}
</style>
