Blockly.Python['import_hello'] = function(block) {
    var code = 'from hello import *\n';
    return code;
};

Blockly.Python['hello_sayhello'] = function(block) {
    var code = `sayhello()\n`;
    return code;
};

Blockly.Python['hello_speak'] = function(block) {
    return `speak(${Blockly.Python.valueToCode(block, "parameters",0)})\n`;
};