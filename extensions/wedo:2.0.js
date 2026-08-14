DunbunMod.extensions.register({
  id:"wedo",
  name:"WeDo 2.0",
  blocks:[
    { opcode:"wedoMotor", blockType:"command", text:"run WeDo motor [M]", arguments:{M:{type:"number"}} }
  ],
  wedoMotor(a){ console.log("wedo motor", a.M); }
});
