# Contributing

1) Fork this repository.
2) Crate a feature branch called `feature/<your-article-slug>`
3) Once you've followed the steps below, make a pull request with title `Added <your-article-slug> codebase`

# Steps to add a new codebase

Please follow these steps in order to add a new codebase to the project.

- Create a new folder inside the `article` directory and name it with the slug of your article.
  
  **Example**: `cd articles && mkdir compile-python-to-c`

- Add your code examples

- Create a `README.md` file using the following format:

  ```md
  # Article Title

  Article subtitle

  Read the full article [here](article-url)

  # Running the example

  \`\`\`bash
  echo "Insert here the commands used to run the code, if necessary"
  \`\`\`

  # Dependencies

  - a dependency
  - another dependency
  ```

  **example**:

  ```md
  # When, how and why you should call Haskell functions from C

  Compiling a language to C means that you can call it from a large set of programming languages, including Go, Java, Python and Node.js. But when should we do it? And how?

  Read the full article [here](https://www.hackdoor.io/articles/1vpakLJw/when-how-and-why-you-should-call-haskell-functions-from-c)

  # Running the example

  \`\`\`bash
  make run
  \`\`\`

  # Dependencies

  - Gnu Compiler Collection ([gcc](https://gcc.gnu.org))
  - ~~Glasgow~~ **Glorious** Haskell Compiler ([ghc](https://ghc.haskell.org))
  ```