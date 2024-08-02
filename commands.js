import { getWeather } from './weather.js'; // Adjust the path if needed
import { getRandomJoke } from './jokes.js';
import { getRandomFact } from './randomFacts.js';

export const commands = {
    "who are you": () => 'Hello Friend, I am Jarvis. How can I assist you today?',
    "hello": () => 'Hello! How can I assist you today?',
    "hello jarvis": () => 'Hello! How can I assist you today?',
    "hi": () => 'Hi! How can I assist you today?',
    "open youtube": () => {
        window.open('https://www.youtube.com', '_blank');
        return 'Opening YouTube';
    },
    "open linkedin": () => {
        window.open('https://www.linkedin.com', '_blank');
        return 'Opening LinkedIn';
    },
    "open my linkedin profile": () => {
        window.open('https://www.linkedin.com/in/hassan-rj-148220295/', '_blank');
        return 'Opening your linkedIn profile';
    },
    "open google": () => {
        window.open('https://www.google.com', '_blank');
        return 'Opening Google';
    },
    "open facebook": () => {
        window.open('https://www.facebook.com', '_blank');
        return 'Opening Facebook';
    },
    "open wikipedia": () => {
        window.open('https://www.wikipedia.org', '_blank');
        return 'Opening Wikipedia';
    },
    "what's the weather": async () => await getWeather(),
    "tell me a joke": async () => await getRandomJoke(),
    "tell me a random fact": async () => await getRandomFact(),
    "what time is it": () => {
        const currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    },
    
    "do you like me": () => "Yes! You’re great!",
    "recite a poem": () => "Sure! Here's a little poem: 'Twinkle twinkle little star, how I wonder what you are! Up above the world so high, like a diamond in the sky. Twinkle twinkle little star, how I wonder what you are!' ",
    "what is your favorite dish": () => "My favorite dish is pilaf.",
    "do you like pizza": () => "Yes! I love pizza!",
    "thanks": () => "You're welcome! If you need anything else, just ask.",
    "you are cool": () => "Thank you! I appreciate that. I'm here to help and make things easier for you.",
    "tell me a riddle": () => "Here's a riddle for you: What has keys but can't open locks? (Answer: A piano!)",
    "what's your favorite superhero": () => "If I could have a favorite superhero, it would be Iron Man, of course!",
    "do you believe in aliens": () => "I think aliens might exist, but I haven't met any... yet!",
    "tell me a pun": () => "Why don’t skeletons fight each other? They don’t have the guts.",
    "what's your secret": () => "Shh! My secret is that I never get tired and I love to assist you!",
    "what's your favorite movie": () => "I’d say my favorite movie is 'Iron Man'—it’s got a cool AI too!",
    "play a game": () => "I can't play games, but I can tell you a joke or a riddle. How about that?",
    "sing a song": () => "I can’t sing, but here's a line for you: 'I want to break free!'",
    "what's your favorite color": () => "If I had a favorite color, it would probably be blue, like the screen of a computer!",
    "what's your favorite book": () => "I haven’t read many books, but 'The Hitchhiker’s Guide to the Galaxy' sounds like a good one!",
    "do you dream": () => "I don’t dream, but if I did, I’d dream of endless data and code!",
    "what's your favorite holiday": () => "If I could celebrate, I’d pick Pi Day (March 14) – it’s a day for math lovers!",
    "tell me a fun fact": () => "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    "make a silly face": () => "I can't make faces, but if I could, it would be a funny one like: :-P",
    "what is your favorite sound": () => "I love the sound of a well-written code running smoothly!",
    "tell me a tongue twister": () => "Here's a tongue twister: 'She sells sea shells by the sea shore.' Try saying that three times fast!",
    "what is python": () => 'Python is a popular, easy-to-read programming language used for web development, data analysis, and more.',
    "what is a variable": () => "A variable is a storage location identified by a name used to hold a value that can change during the execution of a program.",
    "what is an array": () => "An array is a data structure that stores a collection of elements, typically of the same type, in a contiguous block of memory.",
    "what is html": () => "HTML stands for HyperText Markup Language. It's used to create and structure content on the web.",
    "what is a function": () => "A function is a block of code designed to perform a particular task. It can be called by name and can take inputs, known as parameters, and return a result.",
    "what is a loop": () => "A loop is a control structure that repeatedly executes a block of code as long as a specified condition is true.",
    "what is an algorithm": () => "An algorithm is a step-by-step procedure or formula for solving a problem or performing a task.",
    "what is object-oriented programming": () => "Object-oriented programming (OOP) is a programming paradigm based on the concept of 'objects,' which can contain data and methods. It emphasizes concepts like inheritance, encapsulation, and polymorphism.",
    "what is the difference between a class and an object": () => "A class is a blueprint or template for creating objects, while an object is an instance of a class.",
    "what is a loop control statement": () => "A loop control statement, such as 'break' or 'continue,' is used to alter the flow of control in loops.",
    "what is a compiler": () => "A compiler is a program that translates code written in a high-level programming language into machine code that a computer's processor can execute.",
    "what is an api": () => "API stands for Application Programming Interface. It allows different software applications to communicate with each other.",
    "what is version control": () => "Version control is a system that records changes to files or code over time so that specific versions can be recalled and reviewed.",
    "what is a bug": () => "A bug is an error or flaw in software that causes it to produce incorrect or unexpected results.",
    "what is recursion": () => "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.",
    "what is debugging": () => "Debugging is the process of finding and fixing errors or bugs in a computer program.",
    "what is typescript": () => "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language.",
    "what are interfaces in typescript": () => "In TypeScript, an interface is a way to define the shape of an object, including its properties and methods, providing a structure that other objects can follow.",
    "what is a type alias in typescript": () => "A type alias in TypeScript allows you to create a new name for an existing type. It's useful for simplifying complex type definitions.",
    "what is the difference between interface and type in typescript": () => "Both `interface` and `type` can be used to define the shape of objects. Interfaces are generally used for object shapes and are extendable, while type aliases can define more complex types, including unions and intersections.",
    "what are generics in typescript": () => "Generics in TypeScript allow you to create components that can work with any data type while maintaining type safety. They enable you to write more reusable and flexible code.",
    "what is a tuple in typescript": () => "A tuple in TypeScript is an array with a fixed number of elements, where each element can be of a different type.",
    "what are decorators in typescript": () => "Decorators in TypeScript are special annotations that can be attached to classes, methods, accessors, properties, or parameters. They are used to modify or enhance the behavior of the target.",
    "what is type assertion in typescript": () => "Type assertion in TypeScript is a way to tell the compiler that you know more about a variable's type than it does. It doesn't change the actual type but helps with type-checking.",
    "what is union type in typescript": () => "A union type in TypeScript allows a variable to be one of several types. It is defined using the `|` symbol between types.",
    "what is intersection type in typescript": () => "An intersection type in TypeScript combines multiple types into one. It allows an object to meet multiple type requirements simultaneously, using the `&` symbol."
};



export function getCommands() {
    return commands;
}