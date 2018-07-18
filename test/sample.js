class Component {

}

class Greeter extends Component {
  constructor(message) {
    super();
    this.greeting = message;
  }

  greetFrom(...names) {
    return names.map(name => `${this.greeting} <Name> ${ name } </Name>`);
  }

  greetNTimes({ name, times }) {
    const greeting = this.greetFrom(name);
    for (let i = 0; i < times; i++) {
      console.log(greeting);
    }
  }
}

new Greeter('foo').greetNTimes({ name: 'Webstorm', times: 3 });

function* fibonacci(current = 1, next = 1) {
  yield current;
  yield* fibonacci(next, current + next);
}

const [first, second, ...rest] = take(fibonacci(), 10);

console.log(first, second, ...rest);

function foo() {
  let i = 0;
  const x = { 0: 'zero', 1: 'one' };
  const a = [0, 1, 2];
  let value;
  const v = x.map(s => s.length);

  console.log(v);

  if (!i > 10) {
    for (let j = 0; j < 10; j++) {
      switch (j) {
        case 0:
          value = 'zero';
          break;
        case 1:
          value = 'one';
          break;
      }
      const c = j > 5 ? 'GT 5' : 'LE 5';
      console.log(c);
    }
  } else {
    let j = 0;
    try {
      while (j < 10) {
        if (i === j || j > 5) {
          a[j] = i + j * 12;
        }
        i = (j << 2) & 4;
        j++;
      }
      do {
        j--;
      } while (j > 0);
    } catch (e) {
      calert('Failure: ' + e.message);
    } finally {
      reset(a, i);
    }
  }

  return value;
}

function reset() {

}

function take() {

}

function calert() {
}

console.log(foo());
