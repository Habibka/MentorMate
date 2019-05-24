function printLogo(characterWidth) {
    if (characterWidth < 2 || characterWidth > 10000 || characterWidth % 2 == 0) {
        console.log('The given number is invalid, please enter odd number between 2 and 10000');
        return;
    }
 
    let maximumRows = characterWidth + 1;
    let rowCharacterLength = characterWidth * 10;
    let linesOfText = [];
    let characters = ['-', '*'];
    let currentCharacter = 0;
 
    // Loop each row.
    for (let currentRow = 0; currentRow < maximumRows; currentRow ++) {
        // Make sure we have something once we start appending.
        linesOfText.push('');
        // Revert symbol for last line.
        if (currentRow == maximumRows - 1)
            currentCharacter = 1
 
        // Loop each character.
        for (let currentLetter = 1; currentLetter <= rowCharacterLength; currentLetter++) {
            // Add the next character on the row.
            linesOfText[currentRow] += characters[currentCharacter];
            // If we have done half of it dublicate and stop the loop.
            if (currentLetter >= rowCharacterLength / 2) {
                linesOfText[currentRow] += linesOfText[currentRow];
                break;
            }
            // Top half of the M.
            else if (currentRow  < maximumRows / 2) {
                if (currentLetter == characterWidth - currentRow)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 2 + currentRow)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 3 - currentRow)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 4 + currentRow)
                    currentCharacter = 1 - currentCharacter;
            }
            // Bottom half of the M.
            else {
                let currentRowAfterHalf = maximumRows - 1 - currentRow;
                if (currentLetter == currentRowAfterHalf)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth + currentRowAfterHalf)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 2 - currentRowAfterHalf)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 3 + currentRowAfterHalf)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 4 - currentRowAfterHalf)
                    currentCharacter = 1 - currentCharacter;
                else if (currentLetter == characterWidth * 5 - currentRowAfterHalf)
                    currentCharacter = 1 - currentCharacter;
            }
        }
            console.log(linesOfText[currentRow]);
    }
};
 
printLogo(7);