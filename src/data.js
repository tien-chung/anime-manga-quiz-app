const data = [
    {
      question: "What is the main difference between 'let' and 'var' in JavaScript?",
      incorrectAnswers: [
          "'let' is function-scoped, 'var' is block-scoped",
          "'let' allows redeclaration, 'var' does not",
          "'let' is hoisted, 'var' is not"
      ],
      correctAnswer: "'let' is block-scoped, 'var' is function-scoped"
    },
    {
      question: "Which of the following methods is used to iterate over an array in JavaScript?",
      incorrectAnswers: [
        "filter()",
        "reduce()",
        "map()"
      ],
      correctAnswer: "forEach()"
    },
    {
      question: "What does the 'bind()' method do in JavaScript?",
      incorrectAnswers: [
        "Calls a function immediately",
        "Creates a copy of a function",
        "Modifies the scope of 'this' temporarily"
      ],
      correctAnswer: "Creates a new function with a specific 'this' context"
    },
    {
      question: "How do you create a Promise in JavaScript?",
      incorrectAnswers: [
        "new Promise(executor)",
        "new Promise(callback)",
        "new Promise(handler)"
      ],
      correctAnswer: "new Promise((resolve, reject) => { ... })"
    },
    {
      question: "Which of the following statements about 'async/await' in JavaScript is true?",
      incorrectAnswers: [
        "'async' makes a function non-blocking",
        "'await' can only be used in synchronous functions",
        "'async' is used to pause the execution of a function"
      ],
      correctAnswer: "'async' makes a function return a Promise"
    },
    {
      question: "What does the 'spread' operator (...) do in JavaScript?",
      incorrectAnswers: [
        "Combines arrays into a single array",
        "Expands an object into individual arguments",
        "Multiplies numbers in an array"
      ],
      correctAnswer: "Expands an iterable (like an array) into individual elements"
    },
    {
      question: "What is the purpose of JavaScript's 'call()' method?",
      incorrectAnswers: [
        "Creates a function that can only be called once",
        "Returns a function without executing it",
        "Changes the arguments of a function"
      ],
      correctAnswer: "Calls a function with a specific 'this' value and arguments"
    },
    {
      question: "Which of the following best describes closures in JavaScript?",
      incorrectAnswers: [
        "A function that executes immediately",
        "A function without a return value",
        "A function that takes another function as an argument"
      ],
      correctAnswer: "A function that retains access to its lexical scope, even when executed outside that scope"
    },
    {
      question: "What will the following code output? \nconsole.log(2 + '2' - '2');",
      incorrectAnswers: [
        "'222'",
        "NaN",
        "'4'"
      ],
      correctAnswer: "2"
    },
    {
      question: "What does the 'Object.assign()' method do in JavaScript?",
      incorrectAnswers: [
        "Creates a new object with merged properties",
        "Creates a deep copy of an object",
        "Replaces the properties of an object"
      ],
      correctAnswer: "Copies properties from one or more source objects to a target object"
    }
  ];

export default data;
