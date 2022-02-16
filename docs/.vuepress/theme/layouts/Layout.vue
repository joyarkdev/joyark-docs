<script setup lang="ts">
import {useRouter,} from 'vue-router'
import {onBeforeMount,computed,ref} from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const router = useRouter();
// const state = reactive()
const queryObj = ref();
const inset =ref('false')
const bgColor =ref('')
const textColor =ref('')
const showPageNav =ref('')
const getQueryObject = (url?: any) =>  {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj: any = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs: string, $1: string, $2: string) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });

  return obj;
}
onBeforeMount(() => {
  queryObj.value = getQueryObject()
  inset.value = queryObj.value.inset;
  bgColor.value =queryObj.value.bgColor;
  textColor.value =queryObj.value.color;
  showPageNav.value =queryObj.value.showPageNav;
})
</script>

<template>
<div :class="[inset ? 'inset' : '']">
  <ParentLayout></ParentLayout>
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