# Keyword Lesson Plan Manager
This readme will go through the basics of this soure code. It will cover the folder structure, basics of writing react components, and some instructions on how to write some modern JavaScript using TypeScript so that continued development should be fairly seamless. 

# Contents
1. [What is TypeScript?](#what-is-typescript)
2. [What is Webpack?](#what-is-webpack)
3. [How do I download and run this code?](how-do-i-download-and-run-this-code)
4. [Folder structure](#folder-structure)

## What is Typescript?
TypeScript is a version of JavaScript written to make it more reliable and less error prone. You write TypeScript in almost the exact same way as you would JavaScript except you can define data types on your variables and classes. 
It also supports using interfaces to define your data types and ensure you can never type the wrong property name. 
Below is an example of the difference between a JavaScript function and the equivalent TypeScript version

### JavaScript
```javascript
function AddTwoNumbers(numA, numB) {
    return numA + numB;
}

var foo = 10;
var bar = 20;

var foobar = AddTwoNumbers(foo, bar);
```

Though this will work just fine, if you attempt to pass in a string value to the function it would cause an error, however you would only see this error at runtime. Using TypeScript however you will see this error at compile time, before releasing the code.

### TypeScript
```typescript
function AddTwoNumbers(numA: number, numB: number): number {
    return numA + numB;
}

var foo: number = 10;
var bar: number = 20;

var foobar: number = AddTwoNumbers(foo, bar);
```

With this TypeScript version if you attempt to pass in a string value to the function, your text editor **should** highlight that as an error giving you the chance to fix the issue before releasing the code. (I highly recommend [Visual Studio Code](https://code.visualstudio.com) as it supports TypeScript out of the box, and will highlight errors and problems very well based on the typescript configuration file)
Additionally, any errors like this will prevent TypeScript compilers from completely successfully, meaning you must fix the error before continuing. 

As you can see, TypeScript can easily help you to spot errors while writing the code rather than leaving it for your users to find. 

## What is Webpack?
Webpack is a "JavaScript bundler" which runs on your local development environment. 

## How do I download and run this code?
Firstly, download Git...

## Folder structure
Here are the top level folders. Each child folder contains its own readme which explains what the children of that folder are for. Click a folder name below to navigate there.

TEMP TEMP TEMP 
[src folder](./src)