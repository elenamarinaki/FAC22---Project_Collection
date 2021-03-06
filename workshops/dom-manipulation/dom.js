/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  // your code here
  const secondParagraph = document.querySelectorAll('.font-serif')[1];
  secondParagraph.classList.toggle('highlight');
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  // your code here
  const list = document.createElement('ul');
  array.forEach((el) => {
    ///for each one of the elements of the array given
    const listEl = document.createElement('li');
    listEl.append(el); /// we have a li element with the text inside
    list.append(listEl); //// we append this to the ul
  });
  return list;
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  // your code here
  const textSelection = document.querySelector('textarea');
  if (textSelection.value.length > 140) {
    textSelection.setAttribute('aria-invalid', 'true');
  }
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  // your code here
  document.addEventListener('keydown', validateTweet);
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  // your code here
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach((el) => {
    el.addEventListener('click', () => {
      const nextEl = el.nextElementSibling;
      nextEl.hidden = !nextEl.hidden;
    });
  });
}
