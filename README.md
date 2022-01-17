1. useMemo and useCallback use memoization.

I like to think of memoization as remembering something.

While both useMemo and useCallback remember something between renders until the dependancies change, the difference is just what they remember.

useMemo will remember the returned value from your function.

useCallback will remember your actual function.

2. Use Reducer: When the state object is complex and we need to update the few portion of the object. Not the entire one.
            Or, our state depends on each other in that case useReducer used.

3. useRef: to access the DOM/Manipulate the DOM.

4. UseLayout Effect: is very much simillar to same as the useEffect.

