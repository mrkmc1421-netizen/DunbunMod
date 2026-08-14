DunbunMod.extensions.register({
  id:"makey",
  name:"Makey Makey",
  blocks:[
    { opcode:"mkKey", blockType:"reporter", text:"makey key pressed" }
  ],
  mkKey(){ return false; }
});
