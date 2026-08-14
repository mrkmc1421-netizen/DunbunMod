DunbunMod.extensions.register({
  id:"spike",
  name:"LEGO Spike",
  blocks:[
    { opcode:"spikeMotor", blockType:"command", text:"spike motor [M] power [P]", arguments:{M:{type:"string"},P:{type:"number"}} }
  ],
  spikeMotor(a){ console.log("spike motor", a.M, a.P); }
});
