DunbunMod.extensions.register({
  id:"ev3",
  name:"EV3",
  blocks:[
    { opcode:"ev3Motor", blockType:"command", text:"set EV3 motor [P] power [V]", arguments:{P:{type:"string"},V:{type:"number"}} }
  ],
  ev3Motor(a){ console.log("ev3 motor", a.P, a.V); }
});
