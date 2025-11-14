Blockly.Python['import_hello'] = function(block) {
    var code = 'import hello\n';
    return code;
};

Blockly.Python['hello_sayhello'] = function(block) {
    var code = `hello.sayhello()\n`;
    return code;
};

Blockly.Python['hello_stempel'] = function(block) {
    return `hello.stempel(${Blockly.Python.valueToCode(block, "parameters",0)})\n`;
};