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
1.2 Within the div class container, create div class calc-container which will contain the calculator screen and buttons
2.1 Create div class calc-screen which will be the screen which displays the calculation
3.1 Create div class button-container which will contain the buttons
3.2 Create a grid of 18 buttons using the for loop and CreateElement function
3.3 Set the width of the buttons in percentage form. Height will be set to auto
3.4 Provide class names for the buttons. The numbers should have the same id as the number 
(for example: id of the number 1 should be "one")and have the class name as "number". Likewise, the operators should have their ids as their operation and have the class name as "operator". Finally, name the special buttons such as delete, clear screen, equal to and decimal point with ids as per their function and their
class name as "special-button"
3.5 Include margins between all the elements within the calculator container. Make the operators on the right of the calculator longer in height by adjusting the top and bottom padding

(B) Functionality

4.1 Declare three variables: firstOperand, secondOperand and operator
4.2 Create functions for addition, subtraction, multiplication and division