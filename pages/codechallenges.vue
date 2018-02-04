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
  }
}
</script>

<style>
.code-challenges{
  padding: 20px;
}
</style>