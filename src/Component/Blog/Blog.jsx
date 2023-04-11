import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <div>
        <h1 className="text-2xl font-semibold">
          1. When should we use to Context Api?
        </h1>
        <p>
          <span className="font-medium">Answer: </span>
          The Context API in React is typically used when we need to share data
          or state across multiple components in a React application, without
          passing the data through props manually at each level of the component
          tree. It provides a way to manage global state in a more efficient and
          organized manner, making it easier to share data between components
          that are not directly connected in the component hierarchy.
        </p>
      </div>
      <hr className="my-5" />
      <div>
        <h1 className="text-2xl font-semibold">
          2. What is custom hook in react?
        </h1>
        <p>
          <span className="font-medium">Answer: </span>A custom hook in React is
          a reusable function that summarize logic and state management,
          allowing developers to add special functionality to their React
          applications. Custom hooks are created by the developers themselves,
          and they follow the naming convention of starting with the word "use"
          to signal to React that it's intended to be used as a hook.
        </p>
      </div>
      <hr className="my-5" />
      <div>
        <h1 className="text-2xl font-semibold">
          3. What is UseRef() in react?
        </h1>
        <p>
          <span className="font-medium">Answer: </span>
          useRef() is a built-in React hook that accepts one argument as the
          initial value and returns a reference. A reference is an object having
          a special property current . It allows to create a mutable reference
          to a value that persists across renders. It is commonly used for
          accessing and manipulating the DOM directly, managing input values,
          storing data that needs to persist across renders, or triggering
          imperatively side effects.
        </p>
      </div>
      <hr className="my-5" />
      <div>
        <h1 className="text-2xl font-semibold">
          4. What is useMemo() in react?
        </h1>
        <p>
          <span className="font-medium">Answer: </span>
          useMemo is a React hook used to memoize the result of a computation and optimize performance by avoiding unnecessary computations. It takes a function with computation logic as its first argument and an array of dependencies as its second argument. The computation is re-executed only when the dependencies change, and the memoized result is returned from cache on subsequent renders. It is useful for optimizing expensive calculations or computations that depend on changing data in a component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
