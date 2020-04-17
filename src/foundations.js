export default [
  {
    id: 1,
    term: 'Interpreter',
    def: 'Reads the code line by line and interprets it',
  },
  {
    id: 2,
    term: 'Compiler',
    def:
      'Reads the code all at once and then compiles it into a new language that the computer can understand',
  },
  {
    id: 3,
    term: 'Just-In-Time (JIT) compiler',
    def:
      'Instead of inerpreting bytecode every time a method is invoked, the compiler will rund and optimize the code where possible',
  },
  {
    id: 4,
    term: 'Babel',
    def:
      'A JS compiler that takes your modern JS code and returns browser compatible JS (older JS code)',
  },
  {
    id: 5,
    term: 'Typescript',
    def: 'A typed superset of JS that compilers down to JS',
  },
  {
    id: 6,
    term: 'Call Stack',
    def:
      "A place where your engine keeps track of where your code is in it's execution. First in first out.",
  },
  {
    id: 7,
    term: 'Memory Heap',
    def:
      'A large region in memory that the JS engine provides for us which can be used to store any type pf arbitrary data in an unordered fashion',
  },
  {
    id: 8,
    term: 'Stack Overflow',
    def: 'When the stack takes up more space than it had assigned to it',
  },
  {
    id: 9,
    term: 'Garbage Collection',
    def:
      'The process of finding and deleting objects which are no longer being referenced by other objects',
  },
  {
    id: 10,
    term: 'Memory Leak',
    def:
      'When a program incorrectly manages memroy allocations in such a way that memory which is no longer needed is not relased',
  },
];
