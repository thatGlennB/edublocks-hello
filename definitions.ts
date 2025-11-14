const helloColor = "#bb79b0";

Blockly.Blocks['import_hello'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from hello import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(helloColor);
    }
};

Blockly.Blocks['hello_sayhello'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("sayhello()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(helloColor);
    }
}; 

Blockly.Blocks['hello_speak'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("speak(");
        this.appendValueInput("parameters").setCheck(null);
        this.appendDummyInput().AppendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(helloColor);
    }
}; 