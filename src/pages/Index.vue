<template>
  <Layout>
    <app-why-choose />
    <app-advantages />
    <app-evaluation />
    <app-newspaper />
    <app-awards />
  </Layout>
</template>

<script>
import WhyChoose from '@/components/home/WhyChoose.vue';
import Advantages from '@/components/home/Advantages.vue';
import Evaluation from '@/components/home/Evaluation.vue';
import Newspaper from '@/components/home/Newspaper.vue';
import Awards from '@/components/home/Awards.vue';
export default {
  components: {
    'app-why-choose': WhyChoose,
    'app-advantages': Advantages,
    'app-evaluation': Evaluation,
    'app-newspaper': Newspaper,
    'app-awards': Awards,
  },
};
</script>
