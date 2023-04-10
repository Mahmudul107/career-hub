import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="sm:w-full ">
        <h1 className="text-5xl font-semibold m-10 text-center">
          This is Blog page QnA section
        </h1>
        <div>
          <div class="collapse w-6/12 mb-4">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium flex gap-5">
              <h2 class="text-2xl text-black">
                <span class=" bg-purple-400 rounded-lg p-1"> 1.</span> When
                should we use context API?
              </h2>
              <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div class="collapse-content">
              <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span class=""></span>
                Context API in React should be used when there is a need to
                share state or data between components that are not directly
                related or nested within each other.That time we should use
                Context API for avoid prop drilling.
              </p>
            </div>
          </div>
          <div class="collapse w-6/12 mb-4">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium flex gap-5">
              <h2 class="text-2xl text-black">
                <span class=" bg-purple-400 rounded-lg p-1"> 2.</span> What is
                custom Hook?
              </h2>
              <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div class="collapse-content">
              <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span class=""></span>A custom hook in React is a JavaScript
                function that allows you to reuse stateful logic between
                different components and can help simplify code and improve its
                reusability.
              </p>
            </div>
          </div>
          <div class="collapse w-6/12 mb-4">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium flex gap-5">
              <h2 class="text-2xl text-black">
                <span class=" bg-purple-400 rounded-lg p-1"> 3.</span> What is
                useRef?
              </h2>
              <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div class="collapse-content">
              <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span class=""></span>
                The useRef Hook allows you to persist values between renders. It
                can be used to store a mutable value that does not cause a
                re-render when updated.
              </p>
            </div>
          </div>
          <div class="collapse w-6/12 mb-4">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium flex gap-5">
              <h2 class="text-2xl text-black">
                <span class=" bg-purple-400 rounded-lg p-1"> 4.</span> What is
                useMenu?
              </h2>
              <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div class="collapse-content">
              <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                useMenu is used to get menu items derived from the resources.
                These items include a link to the dashboard page (if it exists)
                and links to the user-defined resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
