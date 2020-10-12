# Minimal Typescript Application

This is a minimal typescript application. It will start an http server on port 3000 and respond to every request with the headers and some more information returned as json

# Getting started

## Prerequisites

### Get a Github account

Go to https://www.github.com and sign up for a free account. Once you completed the signup process, send me your Github username so I will be able to give you write access to this repository.

### Install git on your computer

Download the appropriate release from https://git-scm.com/downloads and install it according to the instructions.

### Install NodeJS on your computer

Download the NodeJS version 14 installer from https://nodejs.org/en/download/current/ and install it according to the instructions.

### Install Visual Studio Code

You will be able to download it from https://code.visualstudio.com/Download

## Development Environment

### Checkout the source code

Use git's 'clone' command to download the source code of this repository, use your favourite terminal to do that ;-)

```
git clone https://github.com/asnapper/learning-bot.git
```

### Install dependencies

To be able to run this application and use some cool development tools, you need to install it's dependencies. `npm` will help you with that. So inside the source code directory run this command:

```
npm install
```

### Run the project in development mode

Simply run `npm run dev` to start the application in development mode. You should see an output similar to this:

```
listening on :::3000 [IPv6]
```
This tells you that the application has started and an HTTP is listening on port 3000. If you open the address http://localhost:3000 in your browser you should see the first response of your very own HTTP Server

### Code Editor

Now open the source code directory in visual studio code and start HACKING!