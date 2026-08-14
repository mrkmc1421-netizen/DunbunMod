DunbunMod.extensions.register({
  id:"translate",
  name:"Translate",
  blocks:[
    { opcode:"tr", blockType:"reporter", text:"translate [T] to [L]", arguments:{T:{type:"string"},L:{type:"string"}} }
  ],
  tr(a){ return a.T; }
});
