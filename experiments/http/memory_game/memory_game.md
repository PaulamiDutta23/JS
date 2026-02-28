# Memory Game
Select type of word, then keep remembering new words.
Games ends on wrong words.

# Requirement/Gameflow.
- Create new game. // Server creating a game, there is need to identify game, client also need to remember some way to identify game.
- Instruction. Client side
- Each turn take user input send it to server, server send the result back.
  - Request Body: 
  - Response Body: {score: , category:, wordsSeen: [], ended: true}
- Based on result either go for next turn or show game end message.