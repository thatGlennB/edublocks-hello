Blockly.Python['import_hello'] = function(block) {
    var code = 'from hello import *\n';
    return code;
};

Blockly.Python['hello_sayhello'] = function(block) {
    var code = `hello()\n`;
    return code;
};  