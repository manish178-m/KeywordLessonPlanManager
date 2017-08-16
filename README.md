# Keyword Lesson Plan Manager
This readme will go through the basics of this soure code. It will cover the folder structure, basics of writing react components, and some instructions on how to write some modern JavaScript using TypeScript so that continued development should be fairly seamless. 

# Contents
1. [What is TypeScript?](#what-is-typescript)
2. [What is Webpack?](#what-is-webpack)
3. [How do I download and run this code?](how-do-i-download-and-run-this-code)
4. [How do I setup xampp and run the PHP Api?](#how-do-i-setup-xampp-and-run-the-php-api)
5. [Folder and file structure](#folder-and-file-structure)

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
Webpack is a "JavaScript bundler" which runs on your local development environment. Since we want to break our JavaScript (TypeScript) into separate files, a file for each react component or class, we need something to compile those files back into a single JavaScript file for the browser to read. Webpack has the ability to do this, and uses the webpack.config.js config file to define how to compile our code. It also allows additional plugins known as "loaders" which can perform a multitude of different tasks while compiling our code. For example "ts-loader" can convert the TypeScript into plain JavaScript, then that resulting JavaScript is then compiled into a single file. 

## How do I download and run this code?
Firstly, download [Git](https://git-scm.com/downloads) and a GUI of your choice for Git. I recommend [TortoiseGit](https://tortoisegit.org/download/) as it provides nice context menu options for git commands. I suggest setting all the defaults for both these applications except when asked for your name and email address. In these files, I would use the same details as your Github account. 

## How do I setup xampp and run the PHP Api?
Firstly, download and install [xampp](https://www.apachefriends.org). You can use the default xampp folder (usually C:\xampp\htdocs) and download the Github repository into this folder. Or if you follow these steps you can configure xampp to serve files from anywhere on your file system. 
- From the root of your xampp installation, find the file "\apache\conf\extra\httpd-vhosts.conf" and edit it with any text editor. 
- You can either use domain names, or port numbers. If you use port numbers then you can access each local website you add here through "http://localhost: 81", "http://localhost:82", etc. 
Or if you use domain names, you can define any name you like such as "mywebsite.dev" (I like to use .dev so there will never be a conflict with a real website on the internet).
    - If you want to use port numbers you can add something like this: 
        ```xml
        NameVirtualHost *:80

        <VirtualHost *:81>
            DocumentRoot C:/www/myfolder1
            ServerName locahost

            <Directory "C:/www/myfolder1">
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Require all granted
            </Directory>
        </VirtualHost>

        <VirtualHost *:82>
            DocumentRoot C:/www/myfolder2
            ServerName localhost

            <Directory "C:/www/myfolder2">
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Require all granted
            </Directory>
        </VirtualHost>
        ```
        This should be fairly self-explanatory. The DocumentRoot and <Directory> tag are the folder where your code is stored, the "*:81" bit defines which port to use for this folder. And the rest you can leave as it is and don't worry too much about it. 
    
    - However if you want something a little nicer to read you can add something like this instead: 
        ```xml
        NameVirtualHost *:80

        <VirtualHost *:80>
            DocumentRoot C:/www/myfolder1
            ServerName mywebsite1.dev

            <Directory "C:/www/myfolder1">
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Require all granted
            </Directory>
        </VirtualHost>

        <VirtualHost *:80>
            DocumentRoot C:/www/myfolder2
            ServerName mywebsite2.dev

            <Directory "C:/www/myfolder2">
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Require all granted
            </Directory>
        </VirtualHost>
        ```
    - In this version, all websites use port 80 and they also use a specific name, unique to the project. *However*, if you want to use this setup, you will also need to edit your host file to redirect those domain names back to xampp, otherwise your computer will try to find them online. 
    - To do this, firstly open Notepad as Administrator (it must be adminstrator or you won't be able to save the file we need to edit), then select open file and navigate to "C:\Windows\System32\drivers\etc" and edit the "hosts" file (it might not be visible to start with, just type hosts into the file open dialogue, it will find it). 
    - In this file, add a row at the bottom like
        - 127.0.0.1 mywebsite1.dev
    - where "mywebsite1.dev" matches the value you entered in the xampp vhosts file. 
    - Start Apache from the xampp control panel and then try to navigate to "mywebsite1.dev and it should now be serving the files in that folder like a real website. 

## Folder and file structure
Here are the top level folders. Each child folder contains its own readme which explains what the children of that folder are for. Click a folder name below to navigate there.

File/Folder | On Github? | What is this folder for?
---|---|---
**src/** | Yes | This is the folder where all our source code for the application is stored. In here is our TypeScript files and the PHP Api code.
**build/** | No | This is the out folder where webpack will output the bundled JavaScript and other files for the compiled website. This is not included on Github as it is automatically generated and we will never directly edit the contents of these files.
**node_modules/** | No | This folder holds all the packages downloaded from npm which we need to develop this application. Again, this is not checked into Github because these files are automatically handled by npm and we will not manually edit these files.
**.gitignore** | Yes | This file lists all the folders and that we want to ignore when committing files into Github. For example we want to ignore "node_modules/" and "build/".
**package.json** | Yes | This file is generated by npm when starting a new project (using "npm init" on the command line). It contains some basic information about the project such as name and description. It also contains all the information about the project dependencies, and the development dependencies. For example in this project "react" is a dependency, something which the project needs to run on the client browser, whereas "webpack" is a devDependency, something which only developers require to run and develop the project. It also contains the scripts which can be run from the command line. Read the comments in the file for more information.
**README.md** | Yes | This file you are reading.
**tsconfig.json** | This is the file TypeScript...