const helloColor = "#4dcad1";

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
          .appendField("sayhello()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(helloColor);
    }
}; 