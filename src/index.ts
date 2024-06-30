async function greet(greeting: string = 'Hello') {
  return `${greeting}!`;
}

greet().then((value) => console.log(value));
