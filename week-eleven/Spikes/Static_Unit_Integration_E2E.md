# Static vs Unit vs Integration vs E2E Testing for Frontend Apps 🧪

### The four types of tests

- **End to End (E2E)**: helper robot that behaves like a user would, clicking around the app and verifying that if functions correctly. Also known as **_functional testing_**.
  - These tests will run the entire application, both ends and will interact with it just like a user would. This kind of tests are typically written with `cypress`.
  - They can sometimes be quite long, since they simulate an actual user.
    ⬆️
- **Integration**: verify that several units work together in harmony.
  - The idea behind integration testing is _to mock as little as possible_.
  - For example, we can mock **only** network requests, or specific components responsible for one behavior.
    ⬆️
- **Unit**: verify that individual, isolated parts work as expected.
  ⬆️
- **Static**: catch typos and errors as you write the code.

⚠️ The amount of focus when testing applications is not the same for each one of these forms.

### Why do we test?

- We want to be confident that the code we are writing for the future won't break the app that we have running in production today.
- We have to make sure that the tests we are writing bring us the most confidence possible, while being aware of the trade-offs.
  - As we are moving _from the static testing towards the E2E_ (testing pyramid 🔺), the problems we have to face are **more complex**. At the same time, the testing is **more costly** and takes **more time** to write and maintain.
  - The higher up we go towards E2E, the more likely it is for a test to fail, leading to more time to analyze and fix it.
  - The speed is much slower, since more code is running.
- As we go lower down the pyramid, there are some things that are impossible to test. 🤔

>     The more your tests resemble the way your software is used, the more confidence they can give you.
