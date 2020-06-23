This program allows a user to play tic-tac-toe on a stylish aqua game board!

The user has the ability to register a username and password with the program and have that information stored in the program's cache, so that a player can sign-in and sign-out using this username to play games, and track their game history. 

Every time a user presses "New Game", the previous game is stored in game history and the board is reset.





Planning for this program included mapping API functionalities, seperated by authentication events and game events.

---AUTHENTICATION EVENT AJAX REQUESTS---
sign-up/sign-in: POST
change password: PATCH
sign out: DELETE
---GAME EVENT AJAX REQUESTS---
create game: POST
index games/game stats: GET
update gameboard: PATCH

---HTML---
ize the game-board, and styling is kept in the index.scss file. The HTML is seperated into 2 sections, home and board. Home includes the authorized and unauthorized events, organized by classes that can be shown and hidden on the appropriate event handlers, and game board is the actual board which utilizes bootstrap to auto-size. 

Scripting is kept in 5 files: 

app.js holds the event handlers
events.js holds the formatting of inputs, and what will be done with that data, (ajax requests and success/failure messaging). 
events.js also holds game logic scripting. 
api.js holds the details of the ajax reqeusts 
ui.js holds the details of the ajax success & failure messages. 

the game logic 

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


