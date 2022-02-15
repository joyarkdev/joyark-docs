<script setup lang="ts">
import {useRouter,} from 'vue-router'
import {onMounted,computed} from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const router = useRouter();
const inset = computed(() => router.currentRoute.value.query.inset);
const bgColor = computed(() => router.currentRoute.value.query.bgColor);
const textColor = computed(() => router.currentRoute.value.query.color);
const showPageNav = computed(() => router.currentRoute.value.query.showPageNav);
onMounted(() => {
  // 测试是否接收到参数
  console.log(router.currentRoute.value.query)
})
</script>

<template>
<div class="inset">
  <ParentLayout></ParentLayout>
  <div>{{router.currentRoute.value.query}}</div>
</div>
  
</template>

<style lang="scss">
.inset{
  background:v-bind(bgColor);
  color:v-bind(textColor);
  min-height:100vh;
  .page-nav{
    display:v-bind(showPageNav);
  }
  .navbar{
    display:v-bind(showPageNav);
  }
  .sidebar{
    display:v-bind(showPageNav);
  }
  
}
</style>