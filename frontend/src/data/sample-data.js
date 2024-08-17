const sampleData = [
  // Python tips
  {
    id: 1.1,
    title: "List-mania Edition",
    description: "Use list comprehensions for concise code.",
    language: "Python",
  },
  {
    id: 1.2,
    title: "Library Wizardry",
    description: "Leverage the power of Python’s standard library.",
    language: "Python",
  },
  {
    id: 1.3,
    title: "Generator Ninja",
    description: "Use generators for large datasets.",
    language: "Python",
  },
  {
    id: 1.4,
    title: "Multi-Return Magic",
    description: "Take advantage of Python’s multiple return values.",
    language: "Python",
  },
  {
    id: 1.5,
    title: "Context Commander",
    description: "Use context managers to manage resources.",
    language: "Python",
  },
  {
    id: 1.6,
    title: "Global Annihilator",
    description: "Avoid using global variables.",
    language: "Python",
  },
  {
    id: 1.7,
    title: "Virtual Env Virtuoso",
    description: "Use virtual environments for dependency management.",
    language: "Python",
  },
  {
    id: 1.8,
    title: "F-string Fantastic",
    description: "Utilize f-strings for formatted string literals.",
    language: "Python",
  },
  {
    id: 1.9,
    title: "Loop Maestro",
    description: "Optimize loops with built-in functions.",
    language: "Python",
  },
  {
    id: 1.0,
    title: "Testy McTestface",
    description: "Write unit tests for your functions.",
    language: "Python",
  },

  // JavaScript tips
  {
    id: 2.1,
    title: "Variable Wrangler",
    description: "Always declare variables with 'let' or 'const'.",
    language: "JavaScript",
  },
  {
    id: 2.2,
    title: "Arrow Function Ace",
    description: "Use arrow functions for cleaner syntax.",
    language: "JavaScript",
  },
  {
    id: 2.3,
    title: "Var Evader",
    description: "Avoid using 'var' for variable declarations.",
    language: "JavaScript",
  },
  {
    id: 2.4,
    title: "Comparison Crusader",
    description: "Use '===', '!==', instead of '==', '!=' for comparisons.",
    language: "JavaScript",
  },
  {
    id: 2.5,
    title: "Pure Function Fanatic",
    description: "Keep your functions pure and avoid side effects.",
    language: "JavaScript",
  },
  {
    id: 2.6,
    title: "Template String Tamer",
    description: "Use template literals for better string handling.",
    language: "JavaScript",
  },
  {
    id: 2.7,
    title: "Async/Await Artist",
    description: "Leverage async/await for cleaner asynchronous code.",
    language: "JavaScript",
  },
  {
    id: 2.8,
    title: "Global Variable Vanisher",
    description: "Minimize use of global variables.",
    language: "JavaScript",
  },
  {
    id: 2.9,
    title: "Object Destructuring Dynamo",
    description: "Use object destructuring for cleaner code.",
    language: "JavaScript",
  },
  {
    id: 2.0,
    title: "Modular Code Master",
    description: "Write modular code to enhance reusability.",
    language: "JavaScript",
  },

  // Java tips
  {
    id: 3.1,
    title: "StringBuilder Sorcerer",
    description: "Use StringBuilder for string manipulation in loops.",
    language: "Java",
  },
  {
    id: 3.2,
    title: "Interface Enthusiast",
    description: "Prefer interfaces over abstract classes.",
    language: "Java",
  },
  {
    id: 3.3,
    title: "Resource Closer",
    description: "Always close resources in a try-with-resources block.",
    language: "Java",
  },
  {
    id: 3.4,
    title: "Final Keyword Fanatic",
    description: "Use final keyword where applicable for better performance.",
    language: "Java",
  },
  {
    id: 3.5,
    title: "Null Avoider",
    description: "Avoid using 'null' where possible.",
    language: "Java",
  },
  {
    id: 3.6,
    title: "Stream & Lambda Lover",
    description: "Leverage the power of streams and lambdas.",
    language: "Java",
  },
  {
    id: 3.7,
    title: "Exception Handler Extraordinaire",
    description: "Use proper exception handling techniques.",
    language: "Java",
  },
  {
    id: 3.8,
    title: "Standard Library Supporter",
    description: "Make use of Java's standard libraries and frameworks.",
    language: "Java",
  },
  {
    id: 3.9,
    title: "Multithreading Maven",
    description: "Utilize multithreading effectively.",
    language: "Java",
  },
  {
    id: 3.0,
    title: "Test Titan",
    description: "Write unit tests to ensure code quality.",
    language: "Java",
  },

  // C++ tips
  {
    id: 4.1,
    title: "Smart Pointer Slinger",
    description: "Use smart pointers instead of raw pointers.",
    language: "C++",
  },
  {
    id: 4.2,
    title: "Vector Victor",
    description: "Prefer 'std::vector' over raw arrays.",
    language: "C++",
  },
  {
    id: 4.3,
    title: "RAII Rockstar",
    description: "Leverage RAII for resource management.",
    language: "C++",
  },
  {
    id: 4.4,
    title: "Const Crusader",
    description: "Use 'const' keyword wherever possible.",
    language: "C++",
  },
  {
    id: 4.5,
    title: "Memory Management Magician",
    description:
      "Optimize memory usage by minimizing dynamic memory allocations.",
    language: "C++",
  },
  {
    id: 4.6,
    title: "Reference Ranger",
    description: "Use references instead of pointers when possible.",
    language: "C++",
  },
  {
    id: 4.7,
    title: "Inline Function Insider",
    description: "Take advantage of inline functions for performance.",
    language: "C++",
  },
  {
    id: 4.8,
    title: "Copy Cutter",
    description: "Avoid unnecessary copying of objects.",
    language: "C++",
  },
  {
    id: 4.9,
    title: "STL Superhero",
    description: "Utilize STL algorithms for efficient operations.",
    language: "C++",
  },
  {
    id: 5.0,
    title: "Move Semantics Maestro",
    description: "Implement move semantics where appropriate.",
    language: "C++",
  },

  // Ruby tips
  {
    id: 5.1,
    title: "Convention Connoisseur",
    description: "Follow Ruby's convention over configuration principle.",
    language: "Ruby",
  },
  {
    id: 5.2,
    title: "Loop Legend",
    description: "Use 'each' instead of 'for' loops.",
    language: "Ruby",
  },
  {
    id: 5.3,
    title: "Block Builder",
    description: "Utilize blocks for clean and powerful code.",
    language: "Ruby",
  },
  {
    id: 5.4,
    title: "String Savant",
    description: "Manipulate strings efficiently using built-in methods.",
    language: "Ruby",
  },
  {
    id: 5.5,
    title: "Symbol Sage",
    description: "Use symbols instead of strings for identifiers.",
    language: "Ruby",
  },
  {
    id: 5.6,
    title: "Require-relative Rockstar",
    description: "Use 'require_relative' for better file management.",
    language: "Ruby",
  },
  {
    id: 5.7,
    title: "Idiomatic Icon",
    description: "Write idiomatic Ruby code.",
    language: "Ruby",
  },
  {
    id: 5.8,
    title: "Testing Tactician",
    description: "Leverage RSpec for robust testing.",
    language: "Ruby",
  },
  {
    id: 5.9,
    title: "DRY Defender",
    description: "Adhere to the DRY principle to reduce code duplication.",
    language: "Ruby",
  },
  {
    id: 6.0,
    title: "Chaining Champion",
    description: "Chain methods for more readable code.",
    language: "Ruby",
  },

  // Go tips
  {
    id: 6.1,
    title: "Function Focus Fanatic",
    description: "Keep functions small and focused.",
    language: "Go",
  },
  {
    id: 6.2,
    title: "Concurrency Conqueror",
    description: "Use Go routines and channels for concurrency.",
    language: "Go",
  },
  {
    id: 6.3,
    title: "Dependency Injection Devotee",
    description: "Avoid global variables and prefer dependency injection.",
    language: "Go",
  },
  {
    id: 6.4,
    title: "Standard Library Sage",
    description: "Leverage Go's standard library for common tasks.",
    language: "Go",
  },
  {
    id: 6.5,
    title: "Defer Dynamo",
    description: "Use 'defer' for cleaning up resources.",
    language: "Go",
  },
  {
    id: 6.6,
    title: "Error Handling Hero",
    description: "Use Go's built-in error handling effectively.",
    language: "Go",
  },
  {
    id: 6.7,
    title: "Naming Convention Navigator",
    description: "Follow Go's idiomatic naming conventions.",
    language: "Go",
  },
  {
    id: 6.8,
    title: "Slice Specialist",
    description: "Use slices instead of arrays for flexibility.",
    language: "Go",
  },
  {
    id: 6.9,
    title: "Testing Trailblazer",
    description: "Write tests for your code using Go's testing package.",
    language: "Go",
  },
  {
    id: 7.0,
    title: "Module Magician",
    description: "Take advantage of Go modules for dependency management.",
    language: "Go",
  },
];

export default sampleData;
