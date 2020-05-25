[![Made by Silvia Alonso](https://img.shields.io/badge/made%20by-Silvia%20Alonso-pink)](https://www.linkedin.com/in/silvia-alonso-pozas/)
[![With React.js](https://img.shields.io/badge/with-React.js-blue)](https://reactjs.org/)
[![GitHub followers](https://img.shields.io/github/followers/silalonso.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/silalonso?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/silvia_coding.svg?style=social&label=@:silvia_coding)](https://twitter.com/silvia_coding)

# :sparkles: Rick and Morty character generator :sparkles:

This is my Rick and Morty character generator.<br />
.

Try it here : [Rick and Morty](https://silalonso.github.io/modulo-3-evaluacion-final-silalonso/)

![This is how the app looks like](https://raw.githubusercontent.com/silalonso/modulo-3-evaluacion-final-silalonso/master/src/images/pokedex.jpg)

## How does it work?

The exercise consists of developing a web page with a list of Rick and Morty characters, which
you can filter by name.

First we paint on the screen a list of 20 characters, whose data we have obtained from: https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json <br />

Then I've added an input to the interface, so that when you write a name, only the characters whose name contains the written letters(in that same order) remain visible.<br />
No distinction is made between upper and lower case, for your convenience and comfort :smile:.<br />
When you hover over a character, the character's card is highlighted.<br />
When you click on a character's card, its detailed information will appear in full screen.<br />

![Normal state of the pokemon](https://raw.githubusercontent.com/silalonso/modulo-3-evaluacion-intermedia-silalonso/master/src/images/normal.jpg)

![Clicked state](https://raw.githubusercontent.com/silalonso/modulo-3-evaluacion-intermedia-silalonso/master/src/images/clicked.jpg)

## To run this project

This project has been created with Create React App. <br />
**You will need to have Node.js installed** and start the application with React using the following commands:

#### `npm install -g create-react-app`

#### `create-react-app my-react-project`

Don't forget to install local dependencies using npm install.

#### `npm install`

Also, you will need to install:

    1. React Route:

#### `npm install --save react-router-dom`

    2. SASS:

#### `npm install node-sass`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information on how to start a project with React and its scripts, visit [React documentation](https://reactjs.org/)

## :file_folder: Folder structure

```
/
|-docs
|-node_modules
|-public
|-src
|
|-components
| |- App.js
| |- CharacterCard.js
| |- CharacterDetail.js
| |- CharacterDoesNotExist.js
| |- CharacterList.js
| |- Filters.js
| |- Header.js
|
|-images
|
|-services
| |- getDataFromApi.js
|
|-stylesheets
| |- App.scss
| |- index.scss
|
|-App.test.js
|-index.js
|-serviceworker.js
|-setupTest.js
|
|-.gitignore
|-package-lock.json
|-package.json
|-README.md
|
\

```

## :handshake: Contributing

If you want to contribute, you can open a pull request.<br />
Contributions, issues and feature requests are welcome.<br />
Feel free to check issues page if you want to contribute.

## Author

This project was coded by me with :sparkling_heart: <br />
Who I'm I? :raising_hand: <br />
My name is Silvia <br />
I come from :es:, and I can communicate also in :gb:, :de: and :fr:. <br />
[![GitHub followers](https://img.shields.io/github/followers/silalonso.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/silalonso?tab=followers)

## :memo: License

Copyright © 2020 [Silvia Alonso](https://www.linkedin.com/in/silvia-alonso-pozas/). <br />
This project is MIT licensed. [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
