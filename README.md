# calculator-top
A calculator made using HTML, CSS and Javascript

Blueprint (Overview)
1. Create a calculator container. This container will include the calculator screen and buttons
2. Create a calculator screen
3. Create the buttons
4. Add functionality for each button
5. Show calculations on the screen

Pseudocode

(A) Structure and Presentation

1.1 Using html create div class container
2.1 Within the div class container, create div class primary-calc-screen which will contain the primary calculator screen which displays the calculations. 
3.1 Create div class button-container which will contain the buttons
3.2 Create a grid of 18 buttons using the for loop and CreateElement function using Javascript
3.3 Set the width of the buttons in percentage form. Height will be set to auto
3.4 Provide class names for the buttons. The numbers should have the same id as the number 
(for example: id of the number 1 should be "one")and have the class name as "number". Likewise, the operators should have their ids as their operation and have the class name as "operator". Finally, name the special buttons such as backspace, clear screen, equal to and decimal point with ids as per their function and their
class name as "special-button"
3.5 Include margins between all the elements within the calculator container. Make the operators on the right of the calculator longer in height by adjusting the top and bottom padding

(B) Functionality

4.1 Declare three variables: firstOperand, secondOperand and operator
4.2 Create functions for addition, subtraction, multiplication and division
4.3 Assign the number to the firstOperand depending on the numbers clicked by the user. The number is assigned
once the user clicks on the operator thereby confirming that there won't be a change in the firstOperand
4.4 Repeat the same for the operator. The operator should be assigned once the user starts typing the secondOperand
4.5 Repeat the same for the secondOperand. The number is assigned to the secondOperand when the equals sign is
pressed
4.6 When the backspace button is pressed while typing a number, delete the last digit of the number entered in the screen. If there was only one digit left on the screen which was deleted, then a 0 should be displayed on the screen
4.7 The clear screen button should set the variables back to their default state
4.8 The equals button should run a function named operate which will run the calculation of the variables
5.1 The result of the calculations should be displayed on the screen

The numbers being clicked