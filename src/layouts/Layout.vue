<template>
  <div>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'layout',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
