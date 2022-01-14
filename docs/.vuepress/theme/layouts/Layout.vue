<script setup lang="ts">
import {useRouter} from 'vue-router'
import {onMounted,computed} from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const router = useRouter();
const inset = computed(() => router.currentRoute.value.query.inset);
const bgColor = computed(() => router.currentRoute.value.query.bgColor);
const textColor = computed(() => router.currentRoute.value.query.color);
const showPageNav = computed(() => router.currentRoute.value.query.showPageNav);
</script>

<template>
<div :class="[inset ? 'inset' : '']">
<ParentLayout >
  </ParentLayout>
</div>
  
</template>

<style lang="scss">
.inset{
  background:v-bind(bgColor);
  color:v-bind(textColor);
  .page-nav{
    display:v-bind(showPageNav);
  }
}
</style>