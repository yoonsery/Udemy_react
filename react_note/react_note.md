## React

React is all about `Components`

component is combination of html code

### Why Components?

1. Reusability

   - Do not repeat yourself

2. Separation of concerns

   - Do not too many things in one and the same place
   - 코드를 작고 관리할 수 있는 규모로 유지할 수 있다

=> Split big chunk of code into multiple smaller functions

### React & Components

React allows you to create re-usable & reactive components consisting of HTML and javaScript(and CSS)  
⬇️  
Declarative Approach  
⬇️  
Define the desired target state(s) and let React figure out the actual javaScript DOM instructions

## Props

Components can not just use data stored in other components  
You can pass data to custom component by adding an attribute. Inside of that component you can acess to all these attributes

<hr>

## React Component Styling

1. Conditional & Dynamic Styles
2. Styled Components
3. CSS Modules

## Fragments, Potals, Refs

1. JSX Limitations & Fragments
2. Getting a cleaner DOM with Portals
3. Working with Refs

### JSX Limitations

- You can't return more than one "root" JSX element

Because this also isn't valid JavaScript

```
return(
   React.createElement('h2', {}, 'Hello world!')
   React.createElement('p', {}, 'Hi there!')
)
```

The solution: Always wrap adjacent elements

- <div> Soup
  In bigger apps, you can easily end up with tons of unnecessary <div>s which add **no semantic meaning or structure** to the page but are only there because of React's (JSX') requirment

Use `<React.Fragment></React.Fragment>` or `<></>`

### Understanding React Portals

"Semantically" and from a "clean HTML structure" perspective, having nested modal isn't ideal. It is an "overlay to the entire page" after all

## Effects, Reducers & Context

- Working with (side) effects
- Managing more complex state with Reducers
- Managing App-wide or Component-wide state with Context

### What is an `Effect` (or a `Side Effect`)?

- Main job: Render UI & React to User Input

  - Evaluate & Render JSX
  - Manage State & Props
  - React to (User) Events & Input
  - Re-evaluate Component upon State & Prop Changes

- Side Effects
  - Store Data in browser storage
  - Send HTTP Requests to backend servers
  - Set & Manage timers...  
    : These tasks `must happen outside of the normal component evaluation` and render cycle - especially since they might block / delay rendering(eg. HTTP requests)

### Handling side effects with the useEffect() hook

```js
useEffect(() => { ... }, [ dependencies ]);
```

- first parameter: A fucntion that should be executed AFTER every component evaluation IF the specified dependencies changed

- second parameter: Dependencies of this effect - the function only runs if the dependencies changed

### useReducer() for state management

when you have more `complex state` (multiple states, multiple ways of changing) or `dependencies` to other states, using useState() is hard. `useReducer()` can be used as a replacement for useState() if you need **more powerful state management**

### understanding useReducer()

```js
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

### `useState()` vs `useReducer()`

when do you use useReducer()?  
using useState() becomes cumbersome or getting a lot of bugs / unintended behaviors

- **useState()**

  - Main state management tool
  - Great for independent pieces of state / data
  - Great if state updates are easy and limited to a few kinds of updates

- **useReducer()**
  - Great if you need more power
  - Should be considered if you have related pieces of state / data
  - Can be helpful if you have more complex state updates

### Context Limitations

React Context

- is NOT optimized for high frequency changes 👉🏻 Redux
- shouldn't be used to replace ALL component communications and props 👉🏻 Component should still be configurable via props and short "prop chains" might not need any replacement

### Rules of Hooks

#### Only call `React Hooks`

- in React Functions (React Component Functions / Custom Hooks)

- at the Top Level (Do not call them in nested functions / any block statements)

#### `useEffect`

- ALWAYS add everything you refer to inside of useEffect() as a dependency
