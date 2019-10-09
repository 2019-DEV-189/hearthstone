Hearthstone is a small trading card game developed with React 16.10.2 and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Game Rules

Preparation:

1. Each player starts the game with 30 Health and 0 Mana slots.
2. Each player starts with a deck of 20 Damage cards with the following Mana costs: 0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8.
3. From the deck each player receives 3 random cards has his initial hand.

Gameplay:

1. The active player receives 1 Mana slot up to a maximum of 10 total slots.
2. The active player’s empty Mana slots are refilled.
3. The active player draws a random card from his deck.
4. The active player can play as many cards as he can afford. Any played card empties Mana slots and deals immediate damage to the opponent player equal to its Mana cost.
5. If the opponent player’s Health drops to or below zero the active player wins the game
6. If the active player can’t (by either having no cards left in his hand or lacking sufficient Mana to pay for any hand card) or simply doesn’t want to play another card, the opponent player becomes active.

Special Rules:

1. Bleeding Out: If a player’s card deck is empty before the game is over he receives 1 damage instead of drawing a card when it’s his turn.
2. Overload: If a player draws a card that lets his hand size become>5 that card is discarded instead of being put into his hand.
3. Dud Card: The 0 Mana cards can be played for free but don’t do any damage either. They are just annoyingly taking up space in your hand.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the apps dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.