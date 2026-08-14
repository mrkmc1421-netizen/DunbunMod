DunbunMod.extensions.register({
  id:"tts",
  name:"Text to Speech",
  blocks:[
    { opcode:"speak", blockType:"command", text:"speak [T]", arguments:{T:{type:"string"}} }
  ],
  speak(a){ console.log("speak", a.T); }
});
