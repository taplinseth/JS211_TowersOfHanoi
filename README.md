<!-- This is for their personal navigation through the project. They can go through and make sure they get each thing and can comb over it later.  -->

1. 20pts - **Code Plan** - Include this in a `README.md` file in your folder with comments in your code
1. 10pts - **Move Blocks** - User can move "blocks" from column to column
1. 20pts - **Illegal Moves** - Prevents larger blocks from stacking on smaller blocks
1. 20pts - **Notifies winner** - When all the blocks are stacked into column 2 or 1 the user is alerted they won!
1. 20pts - **Minimum 3 Unit Tests** - Should be attached to your file the same way Tic, Tac, Toe, PigLatin or Rock Paper Scissors is done.
1. 10pts - **Graphical User Interface** - Take this game out of the terminal by adding a User Interface that uses `towersOfHanoi()` function in `index.js`.


<!-- code plan -->
user moves block

check to make sure user move is allowed
user cannot stack larger stone ontop of smaller stone
only allow user to move smaller stone on top of larger stone or empty tower

check if all blocks are stacked onto tower 1 or 2
if user has won notify winner

