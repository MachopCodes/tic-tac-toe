Play classic tic-tac-toe with a friend on a stylish game board! 
Sign up and sign in with a username & password to play and track your stats. 

Technologies used in this program are: HTML, CSS & javaScript.

Planning for this program included mapping client to server interactions and game logic.



---HTML---
The HTML is seperated into 2 sections, home and board. Home includes the authorized and unauthorized events, organized by classes that can be shown and hidden on the appropriate event handlers, and game board is the actual board which utilizes bootstrap to auto-size. 

Scripting is kept in 5 files: 

app.js holds the event handlers
events.js holds the formatting of inputs, and what will be done with that data, (ajax requests and success/failure messaging). 
events.js also holds game logic scripting. 
api.js holds the details of the ajax reqeusts 
ui.js holds the details of the ajax success & failure messages. 

Authentication client / server requests
sign-up/sign-in: POST
change password: PATCH
sign out: DELETE

Game event client / server reqeusts
create game: POST
index games/game stats: GET
update gameboard: PATCH

Initial planning for the game logic was outlined in process flow chart.PNG, but when actually coding the logic the flow chart did not include the full detail needed to script the code. 

Generally the game update function is set up with a few things happening:
1. prevent the default
2. Every game board cell has an array index from 0 - 8 for the 9 board squares, set this targeted number to "i"
3. Pass i to a turn swap function (turnChecker) and change current player
4. Pass i to a game-over check function (gameChecker) and set game over to true or false based on criteria
5. Send the index, game over and current player to the Ajax reqeust
6. send that info to the game board update (on success)





JS Functionality (per process flow below)
image - build the gameboard in JS - have it console log / return the interactions.
Build the game board plus event handlers
Link game board to javaScript.



--- WireFrame ---------------------------------------------------------------------------------------------

--- JS Board ------------------------------------------------------------------------------------------------
ticTacToe = [1,2,3,4,5,6,7,8,9]
winning combinations:
[1,2,3],[4,5,6],[7,8,9],
[1,4,7],[2,5,8],[3,6,9],
[1,5,9],[3,5,7]

----user stories-----------------------------------------------------------------------------------
As a player, I want to be able to log in with a unique account so that I can store my game history. As a player, I want to be able to interact with the game board by clicking on the box I want to place my more so that I can play as I would with paper and pen.
As a player, I want to be able to restart a game so that I can try again.
As a player, I want the game to indicate if it is my turn or not to avoid confusion. `
------- How you plan to keep your code modular?-------------------------------------------------------
I'm planning on keeping my code modular by organizing the code into file functions. 1 file for HTML, 1 for CSS, 1 for JavaScript event handlers (app.js), one for the actual events (events.js), one to handle the ajax requests (api.js), one to handle the messages (ui's), one to store win data (store.js)
-----------------What creative spin will you add to your project?----------------------------------------
I'm hoping to use some style in this project and have an X and an O character on the side with googly eyes. If I'm really good I'll be able to get the eyes to blink intermittently.
--------------- How will you use version control to backup / track your project? ----------------------
I want to save any time I hit a milestone towards the final goal. I may use separate branches if I want to work on differnet parts of the development at one time. Maybe have a branch for tracking wins and looses where the win logic is just press a button, and another branch for working on the overall game logic.
--------------------- What additional features will you build if you have extra time? ------------------

If I have extra time, I want to have a win ticker displayed at the top right corner of the map that is clickable and goes into game history. I'd like to simplify the signin so that it can recognize if the email address is new to use sign up instead of sign in. Maybe some cool animations for how the X and O's come onto the board.


