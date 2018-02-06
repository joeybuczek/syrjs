<template>
  <div id="code-challenge-viewer-container">

    <!-- Title and Challenge Selection -->
    <div class="row">
      <div class="col-sm-4">
        <h2 class="title">Code Challenge</h2>
      </div>
      <div class="col-sm-8">
        <select v-model="selected" class="form-control" id="select-challenge">
          <option v-for="(c, i) in challenges" :key="i" :value="i">{{c.title}}</option>
        </select>
        <label id="select-challenge-label">Select a challenge:</label>
      </div>
    </div>

    <!-- Tests and Editor -->
    <div class="row">
      <div class="col-sm-4">
        <h6>{{currentTitle}}</h6>
        <p>{{currentInfo}}</p>
        <hr v-show="currentInfo">
        <ul>
          <li v-for="(t, i) in currentTests" :key="i">
            {{testPassed(i)}} {{t.description}}
          </li>
        </ul>
        <hr v-show="currentInfo">
        <button 
          v-show="currentInfo" 
          @click="processEditor" 
          class="btn btn-sm btn-primary"
        >
          Run Tests
        </button>
      </div>
      <div class="col-sm-8">
        <editor editorId="editorCode" 
          :value="currentCode"
          theme="monokai"
          :onValueChange="codeEditorChange">
        </editor>
        <pre v-show="showExceptionMsg" class="exception-area">
          {{exceptionMessage}}
        </pre>
      </div>
    </div>

  </div>
</template>

<script>
import Editor from './Editor';

// import tests/challenges/utils
import ch01 from '../codechallenges/reverse_a_string';
import ch02 from '../codechallenges/validate_a_palindrome';
import { processEditor } from '../codechallenges/utils';

// TODO: users should be able to cache/reset their code in the session
export default {
  components: { Editor },
  data () {
    return {
      selected: 0,
      testsPassed: [],
      codeEditorValue: '// Code goes here...',
      testEditorValue: '// Tests go here...',
      exceptionMessage: ''
    }
  },
  methods: {
    testPassed (i) { return this.testsPassed.indexOf(i) >= 0 ? '✅' : '❌'; },
    codeEditorChange (value) { this.codeEditorValue = value; },
    resetDataOnSelection () {
      let ccv = this;
      ccv.exceptionMessage = '';
      ccv.testsPassed = [];
      setTimeout(() => ccv.processEditor(), 200);
    },
    processEditor () {
      let processOutput = processEditor({
        tests: this.challenges[this.selected].tests,
        codeEditorValue: this.codeEditorValue
      });
      this.exceptionMessage = processOutput.exceptionMessage;
      this.testsPassed = processOutput.testsPassed;
    }
  },
  computed: {
    challenges () { return this.$store.getters.codeChallenges; },
    showExceptionMsg () { return !!this.exceptionMessage; },
    currentTests () { return this.challenges[this.selected].tests; },
    currentCode () { return this.challenges[this.selected].code; },
    currentTitle () { return this.challenges[this.selected].title; },
    currentInfo () { return this.challenges[this.selected].info; }
  },
  watch: {
    currentTitle () { this.resetDataOnSelection(); }
  }
}
</script>

<style>
#code-challenge-viewer-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin-bottom: 5px;
}
#select-challenge {
  max-width: 400px;
  float: right;
}
#select-challenge-label {
  float: right;
  margin: 7px 10px 0px 0px;
}
.exception-area {
  color: darkred;
  font-size: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold !important;
  border: 1px solid darkred;
  padding: 5px;
}
</style>