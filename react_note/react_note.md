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
