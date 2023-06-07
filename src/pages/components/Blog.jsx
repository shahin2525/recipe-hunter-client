import React from "react";

const Blog = () => {
  return (
    <div className="bg-red-200 px-4 py-5">
      <p>1: What is the difference between control and uncontrol component </p>
      <p className="pb-3">
        Answer: Controlled components refer to components that have their state
        and behavior controlled by the parent component. These components rely
        on props passed down from the parent component to update their state and
        behavior. Uncontrolled components refer to components that manage their
        own state internally.
      </p>
      <p>2: How to validate react props using propType</p>
      <p className="pb-3">
        Answer: PropTypes is a library used in React to validate the types and
        shapes of props passed to a component. You can import the PropTypes
        object from the 'prop-types' package. Inside your component, define the
        expected types and shapes of your props using the propTypes property.
      </p>
      <p>3: What is difference between node js and express js?</p>
      <p className="pb-3">
        Answer: Node.js is a runtime environment that allows you to run
        JavaScript on the server-side. It uses the V8 JavaScript engine from
        Chrome to execute JavaScript code outside of the browser. Node.js
        provides an event-driven, non-blocking I/O model, which makes it highly
        efficient and suitable for building scalable network applications. It
        includes a vast standard library and a package manager called npm, which
        allows you to easily manage and install third-party libraries and
        modules.on the other hand,Express.js is a minimalist, flexible, and
        unopinionated web application framework for Node.js. It provides a set
        of features and tools for building web applications and APIs, such as
        routing, middleware, request handling, and view rendering. Express.js
        simplifies the process of creating server-side applications by providing
        a higher-level abstraction over the raw Node.js HTTP module.
      </p>
      <p> 4: What is custom hook, why will you use custom hook</p>
      <p>
        Answer: In React, a custom hook is a JavaScript function that allows you
        to reuse stateful logic and share it across different components. Custom
        hooks are a way to extract and encapsulate logic that can be reused in
        multiple components without duplicating code.Code Reusability: Custom
        hooks enable you to extract and reuse complex logic that would otherwise
        be duplicated across multiple components. This helps to reduce code
        repetition and keeps your codebase clean and maintainable. Abstraction
        of Stateful Logic: Custom hooks allow you to abstract away the
        implementation details of stateful logic. For example, if you have a set
        of related state variables, event handlers, or API calls that are used
        in multiple components, you can encapsulate that logic within a custom
        hook and simply use the hook in the components.
      </p>
    </div>
  );
};

export default Blog;
