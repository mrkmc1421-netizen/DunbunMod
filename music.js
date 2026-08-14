icon: (<svg width="32" height="32" viewBox="0 0 32 32"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M10 24a4 4 0 1 0 4-4v-9l8-2v5
           a4 4 0 1 0 2 3.5V8l-10 3v9
           a4 4 0 0 0-4 4z"
        fill="#ff4dd2"/>
</svg>)
// music.js — NO THINKING PORT
Scratch.extensions.register({
  id: "music",
  name: "Music",
  blocks: [
    {
      opcode: "note",
      blockType: "command",
      text: "play note [N]",
      arguments: { N: { type: "number", defaultValue: 60 } }
    }
  ],
  note(args) {
    console.log("note", args.N);
  }
});
