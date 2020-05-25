[![Made by Silvia Alonso](https://img.shields.io/badge/made%20by-Silvia%20Alonso-pink)](https://www.linkedin.com/in/silvia-alonso-pozas/)
[![With React.js](https://img.shields.io/badge/with-React.js-blue)](https://reactjs.org/)
[![GitHub followers](https://img.shields.io/github/followers/silalonso.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/silalonso?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/silvia_coding.svg?style=social&label=@:silvia_coding)](https://twitter.com/silvia_coding)

![Rick and Morty image](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/rym35.jpg)

# :rocket: Rick and Morty character generator :rocket:

This is my Rick and Morty character generator.<br />
You can use it, whether you are a human or an :alien:. One thing is for sure, you are going to :heart_eyes: it! <br />

Try it here : [Rick and Morty](https://beta.adalab.es/modulo-3-evaluacion-final-silalonso/)
![This is how the app looks like](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/screenshot.jpg)

## How does it work?

The exercise consists of developing a web page with a list of Rick and Morty characters, which
you can filter by name.

First we paint on the screen a list of 20 characters, whose data we have obtained from: https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json <br />
![characters](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/characters.jpg)

Then I've added an input to the interface, so that when you write a name, only the characters whose name contains the written letters(in that same order) remain visible.<br />
No distinction is made between upper and lower case, for your convenience and comfort :smiley:.<br />
When you hover over a character, the character's card is highlighted.<br />
When you click on a character's card, its detailed information will appear in full screen.<br />

![Character detail](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/detail.jpg)

## :wrench: To run this project

**You need to have Node.js installed** <br />
Clone or download the repository in your computer.<br />

To install local dependencies, type:

#### `npm install`

Also, you need to install React Route and SASS:

#### `npm install --save react-router-dom`

#### `npm install node-sass`

In the project directory, type:

#### `npm start`

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.<br />

Have fun! <br />
![Every character runing](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/running.jpg)

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

I hope you enjoy it! <br />
![Morty happily walking](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/rickwalks.jpg)

## :memo: License

Copyright © 2020 [Silvia Alonso](https://www.linkedin.com/in/silvia-alonso-pozas/). <br />
This project is MIT licensed. [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Rick and Morty acid battle](https://raw.githubusercontent.com/Adalab/modulo-3-evaluacion-final-silalonso/master/src/images/acid.jpg)
