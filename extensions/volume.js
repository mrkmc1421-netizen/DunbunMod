// volume.js — ZERO LOGIC PORT
Scratch.extensions.register({
  id: "volume",
  name: "Volume",
  blocks: [
    {
      opcode: "setVol",
      blockType: "command",
      text: "set volume to [V]",
      arguments: { V: { type: "number", defaultValue: 100 } }
    }
  ],
  setVol(args) {
    console.log("volume", args.V);
  }
});
