<template>
  <div>
    <div class="editor-div" :id="editorId"></div>
    <div class="blank">{{value.length}}</div>
  </div>
</template>

<script>
var editor;

export default {
  props: {
    editorId: { type: String, default: 'editor' },
    value: { type: String, default: '' },
    mode: { type: String, default: 'javascript' },
    lineNumbers: { type: Boolean, default: true },
    theme: { type: String, default: '' },
    onValueChange: { type: Function }
  },
  mounted: function(){
    var component = this;
    editor = CodeMirror(document.getElementById(component.editorId), {
      value: component.value,
      mode: component.mode,
      lineNumbers: component.lineNumbers,
      theme: component.theme
    });
    if (!!component.onValueChange){
      editor.on('change', function(cm, change){
        component.onValueChange(editor.getValue())
      });
    }
  },
  updated: function(){
    editor.setValue(this.value);
  }
}
</script>

<style>
  .blank {
    height: 0px;
    color: transparent;
  }
</style>