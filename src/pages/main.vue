<template>
<div>
  <router-view/>
  <mt-tabbar v-model="selected" :fixed="isFixed">
    <mt-tab-item id="0">
      <div @click="toHome">
        <i class="iconfont icon-shouye2" style="display:block;font-size:21px;"></i>
        <span>首页</span>
      </div>
    </mt-tab-item>
    <mt-tab-item id="1">
      <div @click="toDiscover">
        <i class="iconfont icon-faxian" style="display:block;font-size:24px;"></i>
        <span>发现</span>
      </div>
    </mt-tab-item>
    <mt-tab-item id="2">
      <div @click="toMy">
        <i class="iconfont icon-wode1" style="display:block;font-size:24px;"></i>
        <span>我的</span>
      </div>
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      selected: '0',
      isFixed: true
    }
  },
  methods: {
    toHome () {
      this.$router.push('/home')
    },
    toDiscover () {
      this.$router.push('/discover')
    },
    toMy () {
      this.$router.push('/my')
    }
  }
}
</script>
<style scoped>

</style>
