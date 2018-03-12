export const processEditor = ({
  codeEditorValue,
  tests
}) => {
  let presets = ['es2015', 'react', 'stage-0'];
  let processOutput = { exceptionMessage: '', testsPassed: [] };
  let editorOutput;

  // check editor values for exceptions, and if any, return with exception message
  // Babel is loaded globally in this application
  try {
    editorOutput = Babel.transform(codeEditorValue, { presets }).code;
  } catch(e){
    processOutput.exceptionMessage = e.message;
    return processOutput; 
  }

  // run tests
  tests.forEach((test, i) => {
    if (eval(`${editorOutput} ${test.test}`)) {
      processOutput.testsPassed.push(i);
    };
  });

  return processOutput;  
};