import { useState, useEffect } from "react";

export const getStoredValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const intial = JSON.parse(saved);
    return intial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue]=useState(() => {
        return getStoredValue(key, defaultValue);
    });
    
    useEffect(() => {
        //storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

//ToDo: Add function to clear key.

// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item from localStorage
// clear(): Clear all data from localStorage
// key(): Passed a number to retrieve the key of a localStorage