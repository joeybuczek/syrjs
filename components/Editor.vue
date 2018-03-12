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
    editorId         : { type: String, default: 'editor' },
    value            : { type: String, default: '' },
    mode             : { type: [String, Object], default: () => ({ name: 'javascript', json: true }) },
    lineNumbers      : { type: Boolean, default: true },
    theme            : { type: String, default: '' },
    onValueChange    : { type: Function },
    processEditorCode: { type: Function }
  },
  mounted: function(){
    let { editorId, value, mode, lineNumbers, theme, processEditorCode, onValueChange } = this;
    editor = CodeMirror(document.getElementById(editorId), {
      value      : value,
      mode       : mode,
      lineNumbers: lineNumbers,
      theme      : theme
    });
    editor.setOption("extraKeys", {
      'Ctrl-Enter': function(cm) {
        processEditorCode();
      }
    });
    if (!!onValueChange){
      editor.on('change', function(cm, change){
        onValueChange(editor.getValue())
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