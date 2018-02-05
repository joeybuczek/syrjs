<template>
  <div class="about-container">
    <img src="../assets/syrjs_logo_s.png">
    <h2 class="about-title">Syracuse JavaScript Meetup</h2>
    <br/>
    <p class="about-text">
      We are a group dedicated to discussing and working with the JavaScript programming language.
    </p>
    <p class="about-text">
      We currently meet the third Tuesday of every month, and most events have both a learning and an interactive portion. 
      <br/>
      Whether you’re an experienced JavaScript programmer or just getting started, come check us out!
      <br/>
      We welcome and encourage all proficiency levels.
    </p>
    <p class="about-text">
      To see all the upcoming events to attend, click 
      <a href="https://www.meetup.com/Syracuse-Software-Development-Meetup/events/" target="_blank">here.</a>
    </p>
    <pre>{{testing}}</pre>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  computed: {
    testing () {
      return this.$store.getters.getSuccessfulTest; // LEFT OFF HERE!!!
    }
  }
}
</script>

<style>
.container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.about-container {
  padding: 20px;
}
.about-title {
  margin-top: 20px;
}
.about-text {
  font-size: 14px;
}
</style>
