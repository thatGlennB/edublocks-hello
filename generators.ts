Blockly.Python['import_hello'] = function(block) {
    var code = 'import hello\n';
    return code;
};

Blockly.Python['hello_sayhello'] = function(block) {
    var code = `hello.sayhello()\n`;
    return code;
};

Blockly.Python['hello_speak'] = function(block) {
    return `hello.speak(${Blockly.Python.valueToCode(block, "parameters",0)})\n`;
};