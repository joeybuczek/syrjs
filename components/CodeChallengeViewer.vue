<template>
  <div id="code-challenge-viewer-container">

    <!-- Title and Challenge Selection -->
    <div class="row">
      <div class="col-sm-4 col-md-4">
        <h2 class="title">Code Challenge</h2>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3">
        <div class="form-group">
          <select v-model="selectedEvent" class="form-control" id="select-event">
            <option v-for="(e, i) in events" :key="i" :value="e.value">{{e.text}}</option>
          </select>
        </div>
      </div>
      <div class="col-cxs-12 col-sm-12 col-md-5">
        <div class="form-group">
          <select v-model="selectedChallenge" class="form-control" id="select-challenge">
            <option v-for="(c, i) in challenges" :key="i" :value="i">{{c.title}}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Tests and Editor -->
    <div class="row">
      <div class="col-sm-4">
        <div v-show="challenge.info">
          <h6>{{challenge.title}}</h6>
          <p>{{challenge.info}}</p>
          <hr>
          <ul>
            <li v-for="(t, i) in challenge.tests" :key="i">
              {{testPassed(i)}} {{t.description}}
            </li>
          </ul>
          <hr>
          <button
            @click="processEditor" 
            class="btn btn-sm btn-primary"
          >
            Run Tests
          </button>
        </div>
      </div>
      <div class="col-sm-8">
        <editor editorId="editorCode" 
          :value="currentChallengeCodeValue"
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

// import utils
import { processEditor } from '../codechallenges/utils';

// TODO: users should be able to cache/reset their code in the session
export default {
  components: { Editor },
  data () {
    return {
      selectedEvent: '',
      selectedChallenge: 0,
      testsPassed: [],
      currentChallengeCodeValue: '', // use this for local storage
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
      // setTimeout(() => ccv.processEditor(), 200); // Turn off for now
    },
    processEditor () {
      let { eventDate, title, tests } = this.challenge;
      let processOutput = processEditor({
        tests: tests, //this.challenges[this.selectedChallenge].tests,
        codeEditorValue: this.codeEditorValue
      });
      this.exceptionMessage = processOutput.exceptionMessage;
      this.testsPassed = processOutput.testsPassed;
      // Save user's code to local storage
      window.localStorage[`${eventDate}${title}`] = this.codeEditorValue;
    },
    manageLocalStorage () {
      // Check to see if a valid code challenge is loaded, and if so, load it into localStorage...
      let { code, eventDate, title } = this.challenge;
      let isValidChallenge = !!code && !!eventDate;
      if (isValidChallenge) {
        let challengeKey = `${eventDate}${title}`;
        if (!!window.localStorage[challengeKey]) {
          this.currentChallengeCodeValue = window.localStorage[challengeKey];
        } else {
          window.localStorage[challengeKey] = code;
          this.currentChallengeCodeValue = code;
        }
      } else {
        // ...otherwise just use the code placeholder value
        this.currentChallengeCodeValue = code;
      }
    }
  },
  computed: {
    challenges () {
      let ccv = this;
      return ccv.$store.getters.codeChallenges.filter(c => c.eventDate === ccv.selectedEvent);
    },
    events () {
      return this.$store.getters.codeEvents;
    },
    showExceptionMsg () { return !!this.exceptionMessage; },
    challenge () { return this.challenges[this.selectedChallenge]; }
  },
  watch: {
    selectedEvent () {
      this.selectedChallenge = 0;
      this.manageLocalStorage();
    },
    challenge () {
      this.resetDataOnSelection();
      this.manageLocalStorage();
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
.inline-label {
  padding-right: 5px;
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