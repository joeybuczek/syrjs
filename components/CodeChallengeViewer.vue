<template>
  <div id="code-challenge-viewer-container">

    <!-- Header -->
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
        <pre v-show="showExceptionMsg" class="exception-area">{{exceptionMessage}}</pre>
      </div>
    </div>

  </div>
</template>

<script>
import Editor from './Editor';

// import tests/challenges
import ch01 from '../codechallenges/reverse_a_string';
import ch02 from '../codechallenges/validate_a_palindrome';

// defaults
var challengeDefault = { 
  tests: [], 
  code: '', 
  info: '', 
  title: 'Select a Challenge!' 
};

// TODO: as an entire app goes, users should be able to cache/reset their code
// TODO: try to tidy this section up!
export default {
  components: { Editor },
  data () {
    return {
      selected: 0,
      challenges: [ // TODO: these should eventually be 'loaded' from elsewhere
        challengeDefault,
        ch01,
        ch02
      ],
      testsPassed: [],
      codeEditorValue: '// Code goes here...',
      testEditorValue: '// Tests go here...',
      exceptionMessage: ''
    }
  },
  methods: {
    testPassed (i) {
      return this.testsPassed.indexOf(i) >= 0 ? '✅' : '❌';
    },
    codeEditorChange (value) {
      this.codeEditorValue = value;
    },
    resetDataOnSelection () {
      var component = this;
      component.exceptionMessage = '';
      component.testsPassed = [];
      setTimeout(() => component.processEditor(), 200);
    },
    processEditor () {
      var component = this;
      var presets = ['es2015', 'react', 'stage-0'];
      var editorOutput;

      // clear exception messages, then check editor values for exceptions
      this.exceptionMessage = '';
      try {
        editorOutput = Babel.transform(this.codeEditorValue, { presets }).code;
      } catch(e){
        this.exceptionMessage = e.message;
      }

      // run tests
      var passed = [];
      component.challenges[component.selected].tests.forEach((test, i) => {
        if (eval(`${editorOutput} ${test.test}`)) {
          passed.push(i);
        };
      });
      component.testsPassed = passed;
    }
  },
  computed: {
    showExceptionMsg () {
      return !!this.exceptionMessage;
    },
    currentTests () {
      return this.challenges[this.selected].tests;
    },
    currentCode () {
      return this.challenges[this.selected].code;
    },
    currentTitle () {
      return this.challenges[this.selected].title;
    },
    currentInfo () {
      return this.challenges[this.selected].info;
    }
  },
  watch: {
    currentTitle () {
      this.resetDataOnSelection()
    }
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