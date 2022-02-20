const ADD_LETTER = 'ADD_LETTER';
const addLetter = (updatedLetters) => ({
    type: ADD_LETTER,
    payload: updatedLetters,
});

const DELETE_LETTER = 'DELETE_LETTER';
const deleteLetter = (updatedLetters) => ({
    type: DELETE_LETTER,
    payload: updatedLetters,
});

const GUESS_WORD = 'GUESS_WORD';
const guessWord = (comparisonResults) => ({
    type: GUESS_WORD,
    payload: comparisonResults,
});

export {
    ADD_LETTER,
    addLetter,
    DELETE_LETTER,
    deleteLetter,
    GUESS_WORD,
    guessWord,
};
