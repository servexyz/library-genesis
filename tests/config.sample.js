var templateVarC = { Foo: "Bar" };

//Current
const config_single = [
  {
    target: "/path/to/library/directory0",
    children: [
      { target: "file0A.ext", type: "plain", content: "Hello, file0A" },
      { target: "file0B.ext", type: "plain", content: "Hello, file0B" },
      {
        target: "directory1",
        children: [
          { target: "file1A.ext", type: "plain", content: "Hello, file1A" },
          { target: "file1B.ext", type: "plain", content: "Hello, file1B" }
        ]
      },
      {
        target: "directory2",
        children: [
          { target: "file2A.ext", type: "plain", content: "Hello, file2A" },
          { target: "file2B.ext", type: "plain", content: "Hello, file2B" }
        ]
      }
    ]
  }
];

const config_double = {
  target: "/path/to/library",
  children: [
    {
      target: "/path/to/library/directory0",
      children: [
        { target: "file0A.ext", type: "plain", content: "Hello, file0A" },
        { target: "file0B.ext", type: "plain", content: "Hello, file0B" },
        {
          target: "directory1",
          children: [
            { target: "file1A.ext", type: "plain", content: "Hello, file1A" },
            { target: "file1B.ext", type: "plain", content: "Hello, file1B" }
          ]
        },
        {
          target: "directory2",
          children: [
            { target: "file2A.ext", type: "plain", content: "Hello, file2A" },
            { target: "file2B.ext", type: "plain", content: "Hello, file2B" }
          ]
        }
      ]
    },
    {
      target: "/path/to/library/directory0",
      children: [
        { target: "file0A.ext", type: "plain", content: "Hello, file0A" },
        { target: "file0B.ext", type: "plain", content: "Hello, file0B" },
        {
          target: "directory1",
          children: [
            { target: "file1A.ext", type: "plain", content: "Hello, file1A" },
            { target: "file1B.ext", type: "plain", content: "Hello, file1B" }
          ]
        },
        {
          target: "directory2",
          children: [
            { target: "file2A.ext", type: "plain", content: "Hello, file2A" },
            { target: "file2B.ext", type: "plain", content: "Hello, file2B" }
          ]
        }
      ]
    }
  ]
};

const config_double_modified = {
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
  con: config_single,
  con2: config_double,
  con3: config_double_modified
};
