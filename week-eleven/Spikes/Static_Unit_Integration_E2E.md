# Static vs Unit vs Integration vs E2E Testing for Frontend Apps 🧪

### The four types of tests

- **End to End (E2E)**: helper robot that behaves like a user would, clicking around the app and verifying that if functions correctly. Also known as **_functional testing_**.
  - These tests will run the entire application, both ends and will interact with it just like a user would. This kind of tests are typically written with `cypress`.
  - They can sometimes be quite long, since they simulate an actual user.
- **Integration**: verify that several units work together in harmony.
  - The idea behind integration testing is _to mock as little as possible_.
  - For example, we can mock **only** network requests, or specific components responsible for one behavior.
- **Unit**: verify that individual, isolated parts work as expected.
- **Static**: catch typos and errors as you write the code.

⚠️ The amount of focus when testing applications is not the same for each one of these forms.
