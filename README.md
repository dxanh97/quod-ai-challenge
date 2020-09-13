# Quod AI Challenge

### Dependencies

- **react**: 16.13.1
- **typescript**: 3.8.2
- **styled-components**: 5.2.0
- **react-redux**: 7.2.0
- **@reduxjs/toolkit**: 1.2.5

I started the project using [Yarn](https://yarnpkg.com/) and [create-react-app](https://github.com/facebook/create-react-app) with [TypeScript and Redux template](https://github.com/reduxjs/cra-template-redux-typescript). It will create the project with [TypeScript](https://www.typescriptlang.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) package. TypeScript helps me adding typing to JavaScript, it makes your codes easier to read and maintain, it's so much better to get a type-safety warning at compile time rather than an error at runtime. Redux Toolkit is a official package from Redux team and it's recommended by Redux as well. It helps me simplify the complicated configuration step of the Redux store and remove redundant boilerplate code such as action's types, async action thunks, etc.

### Technical decisions

1. _How did you implement styling? What are the pros and cons? Why did you chose this approach?_  
   I use [styled components](https://styled-components.com/) to style components. I choose this approach because it supports CSS-in-JS, SASS, dynamic styling with props and themes. The cons of styled components is it will make your js/ts files longer and when compile it drops everything in the `<style>` tag.

2. _How did you share state between components? What are the pros and cons? Why did you chose this approach?_  
   I use Redux with Redux Toolkit to store the state of the application since it's the most commonly used library to manage state in React. I created [slice](https://redux-toolkit.js.org/tutorials/intermediate-tutorial#understanding-slices) instead of action and reducer to follow the [Ducks Pattern](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks) for a clear "feature folder" structure. Pros and cons of Redux:

   - Pros: It has one single state for the whole app, any component can access the state, there's no need to pass props back and forth between the component hierarchy, it help organize your state and make it easier for developing and testing.
   - Cons: The redux concept might be hard to understand at first for new developers. To update the application state, you must dispatch an action, which has a corresponding reducer in order to update the state, so there will be a lot of action and reducer in codes. And to handle side-effects you have to use middleware like [redux-thunk](https://github.com/reduxjs/redux-thunk) or [redux-saga](https://github.com/redux-saga/redux-saga), etc.

3. _Did you use React hooks? Why or why not?_  
   I use hooks because it make my code easier to understand. Like the React document explain, it's hard to understand how a component works when there are a lot of unrelated logic code inside of lifecycle methods. So hooks help me split those logic into pieces so I can manage and control the logic of the component easily. React hooks make your codes shorter and easier to read.

4. _What would you improve?_  
   I would add a search and select repo feature to display the issue list from that repo, a better pagination component and smooth animations for the application.

5. _How did you prevent wasted renders?_  
   I use [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo), [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) to memoize variable, nodes and function to prevent unnecessary recompute or calculation.
