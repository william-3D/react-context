import { createContext, useContext } from "react";

export const CharacterContext = createContext(undefined);

// Custom hook + React context to handle errors
export const useCharacterContext = () => {
    const character = useContext(CharacterContext);

    if (character === undefined) {
        throw new Error('useCharacterContext must be used within a CharacterContextProvider');
    }

    return character;
}
