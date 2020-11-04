interface IMarkovChain<T> {
  add:      (txt: string)     => T
  train:    ()                => T
  generate: (length?: number) => string
}

class MarkovChain implements IMarkovChain<MarkovChain> {
  
  constructor() {}

  private data:  string;
  private model: {[key: string]: string[]} = {};
  
  public add(txt): MarkovChain {
    this.data += `${txt} `
    return this;
  }

  public train(): MarkovChain {
    if (!this.data.length) {
      throw Error(`You should add some data before starting the training`)
    }

    const tokens =
      this.data
        .toLowerCase()
        .replace(/\n/gm, ' ')
        .replace(/[^(\w|\d|'|\s)]/gm, '')
        .split(' ')
        .filter(Boolean)

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (!(token in this.model)) {
        this.model[token] = []
      }

      const nextToken = tokens[i + 1];
      if (Boolean(nextToken)) {
        this.model[token].push(nextToken)
      }
    }

    return this;
  }

  public generate(length: number = 100): string {
    const words = Object.keys(this.model)

    if (!words) {
      throw Error(`You should add some data and then train the model before generating a new sentence`)
    }

    let result     = ''
    let randomWord = this.getRandomElement(words)
    
    for (let i = 0; i < length; i++) {
      const newWord = this.getRandomElement(this.model[randomWord])
      result        += `${newWord} `
      
      if (!(newWord in this.model)) {
        randomWord = this.getRandomElement(words)
      } else {
        randomWord = newWord
      }
    }

    return result;
  }

  private getRandomElement<T>(input: T[]): T {
    return input[Math.floor(Math.random() * input.length)]
  }

}