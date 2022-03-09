
import { useState } from 'react'; 



const useLocalStorage = (key, initialValue) => {

const [state, setState] = useState(() => {

    //reading the local storage 
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }

    localStorage.setItem(key, JSON.stringify(initialValue)); 
    return initialValue; 
});

//write the local storage 

const setStoredState = value => {
    localStorage.setItem(key, JSON.stringify(value)); 
    setState(value); 
};
return [state, setStoredState];

// const [valueLS, setValueLS] = useState(() => {
//           const item = localStorage.getItem(key);
//           return item ? JSON.parse(item) : initialValue;
//         });
//         const setStoredValue = value => {
//           const stringifiedValue = JSON.stringify(initialValue);
//           // persist the stringified value in local storage
//           localStorage.setItem(key, stringifiedValue);
//           // put it in state using the setValueLS above
//           setValueLS(value);
//         };
//         return [valueLS, setStoredValue];

};

export default useLocalStorage; 


// export function useLocalStorage(key, value) {
//     const [valueLS, setValueLS] = useState(() => {
//       const item = window.localStorage.getItem(key)
//       return item ? JSON.parse(item) : value
//     })
//     const setStoredValue = value => {
//       const stringifiedValue = JSON.stringify(value)
//       // persist the stringified value in local storage
//       window.localStorage.setItem(key, stringifiedValue)
//       // put it in state using the setValueLS above
//       setValueLS(value)
//     }
//     return [valueLS, setStoredValue]
//   }