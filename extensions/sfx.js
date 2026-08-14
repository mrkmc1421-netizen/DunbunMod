// sfx.js — PURE INSTINCT PORT
Scratch.extensions.register({
  id: "sfx",
  name: "SFX",
  blocks: [
    {
      opcode: "boom",
      blockType: "command",
      text: "play boom"
    }
  ],
  boom() {
    console.log("BOOM");
  }
});
