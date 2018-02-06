const config = {
  directory: "/path/to/library",
  children: [
    {
      directory: "/path/to/library/directory0",
      children: [
        { file: "file0A.ext", type: "plain", content: "Hello, file0A" },
        { file: "file0B.ext", type: "plain", content: "Hello, file0B" },
        {
          directory: "directory1",
          children: [
            { file: "file1A.ext", type: "plain", content: "Hello, file1A" },
            { file: "file1B.ext", type: "plain", content: "Hello, file1B" }
          ]
        },
        {
          directory: "directory2",
          children: [
            { file: "file2A.ext", type: "plain", content: "Hello, file2A" },
            { file: "file2B.ext", type: "plain", content: "Hello, file2B" }
          ]
        }
      ]
    },
    {
      directory: "directory0z",
      children: [
        { file: "file0Az.ext", type: "plain", content: "Hello, file0Az" },
        { file: "file0Bz.ext", type: "plain", content: "Hello, file0Bz" },
        {
          directory: "directory1z",
          children: [
            { file: "file1Az.ext", type: "plain", content: "Hello, file1Az" },
            { file: "file1Bz.ext", type: "plain", content: "Hello, file1Bz" }
          ]
        },
        {
          directory: "directory2z",
          children: [
            { file: "file2Az.ext", type: "plain", content: "Hello, file2Az" },
            { file: "file2Bz.ext", type: "plain", content: "Hello, file2Bz" }
          ]
        }
      ]
    }
  ]
};

/*
==============================================================================
Thoughts / Questions / Notes
==============================================================================

1. modified seems to be best bet... 
2. How do I ensure that they've named the library ? ie. what happ

*/
module.exports = {
  con: config
};
