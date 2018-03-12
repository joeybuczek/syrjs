<template>
  <div class="code-challenges">
    <code-challenge-viewer/>
  </div>
</template>

<script>
import CodeChallengeViewer from '../components/CodeChallengeViewer.vue';

export default {
  components: {
    CodeChallengeViewer
  },
  created(){
    process.env.dataLocation !== 'local' && this.$store.dispatch('loadChallenges');
  },
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js' }
    ]
  }
}
</script>

<style>
.code-challenges{
  padding: 20px;
}
</style>