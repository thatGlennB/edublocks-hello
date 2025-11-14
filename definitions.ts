const helloColor = "#bb79b0";

Blockly.Blocks['import_hello'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("import hello");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(helloColor);
    }
};

Blockly.Blocks['hello_sayhello'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("hello.sayhello()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(helloColor);
    }
}; 

Blockly.Blocks['hello_stempel'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("hello.stempel(");
        this.appendValueInput("parameters")
          .setCheck(null);
        this.appendDummyInput()
          .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(helloColor);
    }
}; 