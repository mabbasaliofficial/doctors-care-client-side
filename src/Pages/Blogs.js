import React from "react";

const Blogs = () => {
  return (
    <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">What is the difference between SQL and NoSQL?</h1>
        <p>
          SQL is the programming language used to interface with relational databases. (Relational
          databases model data as records in rows and tables with logical links between them). NoSQL
          is a class of DBMs that are non-relational and generally do not use SQL.
        </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">What is JWT, and how does it work?</h1>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security information between two
          parties — a client and a server. Each JWT contains encoded JSON objects, including a set
          of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued. Basically the identity provider(IdP)
          generates a JWT certifying user identity and Resource server decodes and verifies the
          authenticity of the token using secret salt / public key.
        </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">
          What is the difference between javascript and Node JS?
        </h1>
        <p>
          <strong> JavaScript</strong>
          <br />
          1. Javascript is a programming language that is used for writing scripts on the website.{" "}
          <br />
          2. Javascript can only be run in the browsers.
          <br />
          3. It is basically used on the client-side.
          <br />
          4. Javascript is capable enough to add HTML and play with the DOM. <br />
          5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in
          Firefox. <br />
          6. Javascript is used in frontend development.
          <br />
          7. Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br />
          8. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.{" "}
          <br />
          <strong>NodeJS</strong>
          <br />
          1. NodeJS is a Javascript runtime environment.
          <br />
          2. We can run Javascript outside the browser with the help of NodeJS.
          <br />
          3. It is mostly used on the server-side.
          <br />
          4. Nodejs does not have capability to add HTML tags.
          <br />
          5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
          6. Nodejs is used in server-side development.
          <br />
          7. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported
          from npm. <br />
          8. Nodejs is written in C, C++ and Javascript.
          <br />
        </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built
          with the concept of event-driven architecture. NodeJS has its own EventLoop which is an
          infinite loop that receives requests and processes them. EventLoop is the listener for the
          EventQueue. If NodeJS can process the request without I/O blocking then the event loop
          would itself process the request and sends the response back to the client by itself. But,
          it is possible to process multiple requests parallelly using the NodeJS cluster module or
          worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
