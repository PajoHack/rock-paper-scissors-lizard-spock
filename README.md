![rock-paper-scissors-lizard-spock](documentation/rock-paper-scissors-lizard-spock-logo-small.png)

# Rock Paper Scissors Lizard Spock

This project is based on the game of chance called “Rock, Paper, Scissors, Lizard, Spock”. The game itself is an expanded version of the classic “Rock, Paper, Scissors” game. The game is easy to play. The player chooses ones of the options by clicking on any of the five icons representing Rock, Paper, Scissors, Lizard or Spock. Then the computer makes a random selection and the winner is determined by the rules of the game.

The game is targeted towards individuals interested in interactive games and web development.

The goal of this project is to provide a fun and entertaining game which is not too complicated to play.

![Screenshot from https://ui.dev/amiresponsive](documentation/responsive-screenshot.png)

## Features

- Header

   - The header area contains a heading with the name of the game along with fontawesome icons.
   - The "Open Rules" button displays a modal showing the rules of the game. Clicking the x icon or anywhere outside of the modal, closes the modal.
   - Clicking the refresh icon re-loads the page and re-starts the game.

<br>

- Scoreboard

   - The scoreboard area displays the player & computer scores.
   - It contains a player and a computer badge at either side so you can, at a glance differentiate between the two.

<br>

- Result

   - The results area displays the outcome after each round of the game.
   - At the start of the game, "Your Move" is displayed.
   - If the player wins, the outcome of the match is shown with the message "You WIN!".
   - if the computer wins, the outcome of the match is shown with the message "You LOST!".
   - When the outcome is tied, a message with "It's a DRAW!" is shown.

<br>

- Game area

   - The game area contains five icons representing the five possible options.
   - When an icon is hovered over or tapped, a lightbluse border appears to give feedback that this is the option selected or about to be selected.
   - If the player wins the round, a green border and shadow appears around the icon indicating a win.
   - If the computer wins the round, a red border and shadow appears around the image indicating a lose.
   - If both the player and computer select the same option, the border is unchanged but the outcome of a draw is displayed in the results area.

<br>

## Testing

- functionality

| Test Label       | Test Action    | Expected Outcome                                                                   | Test Outcome |
|------------------|----------------|------------------------------------------------------------------------------------|--------------|
| Rules   button   | Click   button | Modal   opens displaying the rules of the game                                     | PASS         |
| X icon           | Click icon     | Modal closes                                                                       | PASS         |
| Refresh   icon   | Click   icon   | Page   is re-loaded                                                                | PASS         |
| Rock image       | Select image   | The border of the image turns lightblue                                            | PASS         |
| Rock   image     | Select   image | Player   wins and a green border and shadow are shown around the image temperarily | PASS         |
| Rock image       | Select image   | Computer wins and a red border and shadow   are shown around the image temperarily | PASS         |
| Paper   image    | Select   image | The   border of the image turns lightblue                                          | Pass         |
| Paper image      | Select image   | Player wins and a green border and shadow   are shown around the image temperarily | PASS         |
| Paper   image    | Select   image | Computer   wins and a red border and shadow are shown around the image temperarily | PASS         |
| Scissors image   | Select image   | The border of the image turns lightblue                                            | PASS         |
| Scissors   image | Select   image | Player   wins and a green border and shadow are shown around the image temperarily | PASS         |
| Scissors image   | Select image   | Computer wins and a red border and shadow   are shown around the image temperarily | PASS         |
| Lizard   image   | Select   image | The   border of the image turns lightblue                                          | PASS         |
| Lizard image     | Select image   | Player wins and a green border and shadow   are shown around the image temperarily | PASS         |
| Lizard   image   | Select   image | Computer   wins and a red border and shadow are shown around the image temperarily | PASS         |
| Spock image      | Select image   | The border of the image turns lightblue                                            | PASS         |
| Spock   image    | Select   image | Player   wins and a green border and shadow are shown around the image temperarily | PASS         |
| Spock image      | Select image   | Computer wins and a red   border and shadow are shown around the image temperarily | PASS         |

<br>

- Browser Compatibility

   - The website was tested in different browsers and works well in each one.
   - Browsers used: Chrome, FireFox, Edge & Safari.

<br>

- Responsivness

   - I used Google Developer tools to check the responsiveness of the site on different screen sizes. The site responded well to very large screens such as iMac Pro, medium screens such as iPad Pro and very small screens such as iPhone SE.
   - On smaller screens the font-size and the images are reduced in size to ensure everything is visable and viable.