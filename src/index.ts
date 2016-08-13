interface Greetable {
  name: string;
}

function greet(thing: Greetable): void {
  console.log(`Hello, ${thing.name}!`);
}

greet({ name: "TypeScript" });
