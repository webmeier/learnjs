# Simple starter template

This is a simple starter template (SST for short) I've made for you to have fun with developing with JavaScript as you go through the course.

In this template, when you save your HTML, CSS or JavaScript files, your site will refresh automatically and you'll see the update changes without having to hit reload on your browser, which speeds up development time tremendously!

This starter template is not built for production. If you'd like to see a template that's solidly built and ready for production, consider getting the complete package in my workflow book – [Automating Your Workflow](https://automateyourworkflow.com). If you're totally new to the command line, I suggest reading through the first three chapters of Automating Your Workflow (it's free) before using this SST. Just head over to [this page](https://automateyourworkflow.com) to grab it.

Here's the table of contents for this README file:

1. [Installation](#installation)
2. [How to use](#how-to-use)
3. [Writing HTML](#editing-html)
3. [Writing Sass](#writing-sass)
4. [Writing JavaScript](#writing-javascript)
5. [Adding images](#adding-images)

## Installation

You need to have Node installed onto your system before you use this. If you don't have it yet, you can grab it over on [Node's website](https://nodejs.org/en/) (get the current version).

Next, downloaded this template onto your computer.

Next, navigate to the template in your command line and run `npm install`. You can also run `yarn install` (which is a faster package manager for Node) if you use know how to use [yarn](https://yarnpkg.com/lang/en/).

## How to use

The SST is divided into two main folders:

- `src`
- `dev`

`src` is where you would place all your source files. This includes all your code, images, fonts and everything else. Most of the time, this is the only folder you're interested in.

These files will then be treated and copied over to `dev`, where you'll be able to see the files that are served up.

To begin developing go to your command line and enter `gulp`:

```bash
gulp
```

You should see a log in your command line that looks like this:

```
[13:40:51] Starting 'broswerSync'...
[Browsersync] Access URLs:
 ----------------------------------
       Local: http://localhost:3000
    External: http://10.0.1.5:3000
 ----------------------------------
          UI: http://localhost:3001
 UI External: http://10.0.1.5:3001
 ----------------------------------
```

From this point, navigate to localhost:3000 in your browser of choice (chrome, preferably) and you'll see the site.

## Writing HTML

Create your HTML files in the `src` folder. It should end with the `.html` extension, like all HTML files do. Copy the ready-made `index.html` if you need to create a new one.

## Writing Sass

Sass files are kept in the `src/scss` directory. They are pre-configured to import libraries from the `node_modules` folder. You can use the `@import` statement to import these modules without having to refer manually refer to the `node_modules` folder.

```scss
// Importing typi.
// No need to add path to the `node_modules` folder
@import 'typi';
```

## Writing JavaScript

JavaScript files are kept in the `src/js` folder. They are automatically ran through Webpack – an asset bundler. The configurations for Webpack have already been done for you to.

One very important thing to note – even though Webpack automatically updates the JavaScript on your site, **it cannot refresh your event handlers automatically**. If you need to update your event handlers, you'll still want to reload your website! More information [here](https://webpack.js.org/guides/hot-module-replacement/#gotchas) if you're interested to read up on why (hot module replacement with Webpack is complicated, so let's not go there for now. I don't fully understand it myself. This sucks, but 🤷‍♂️).



## Adding Images

All images are to be placed in the `src/images` directory.

## Final notes

This SST is here to help make your life better! Use it and have fun! If you love this SST and want to improve your development and production processes, consider getting the complete version by buying [Automate Your Workflow](https://automateyourworkflow.com)!