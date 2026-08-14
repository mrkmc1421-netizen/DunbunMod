DunbunMod.extensions.register({
  id:"microbit",
  name:"Micro:bit",
  blocks:[
    { opcode:"mbButton", blockType:"reporter", text:"microbit button pressed" }
  ],
  mbButton(){ return false; }
});
