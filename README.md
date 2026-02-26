## Answers to Questions bellow...

# Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# Answer: 
# getElementById: when we need a single element that time we give a unique id on this element in javaScript we use getElementById to get a unique id's elememt. ex: document.getElementById("unique id name");

# getElementByClassName: when we need multiple elements ,  that time we give a class name on those elements in javaScript we use getElementByClassName to get a same class name elememts. ex: document.getElementByClassName("Class name");

# querySelector: when we need a element which is present in multiple times in our code, when we use querySelector  he returns first matching element. Ex: in javaScript we use document.querySelector('id')

# querySelectorAll: when we need all matching elements, that time we use querySelectorAll  he returns all matching element. Ex: in javaScript we use document.querySelectorAll('.list li')


# Q2. How do you create and insert a new element into the DOM?

# Answer: 

# we can create an element using document.createElement('what we want to create like"div"/"p"'), set its content or attributes, and insert it into the DOM using methods like appendChild(), append()


# Q3. What is Event Bubbling? And how does it work?

# Answer: 

### Event Bubbling is a system in JavaScript where an event starts from the element that was clicked and then it will move up through its parent elements all the way to document.It works like (Child → Parent → Grandparent → document)

# Q4. What is Event Delegation in JavaScript? Why is it useful?

# Answer: 

# Event Delegation is a system where we can  attach a single event listener to a parent element to avoid put event listeners in multiple child elements, and then use event bubbling to detect which child clicked by the event.
# Event Delegation is useful because it Works with Dynamic Content and it allows One listener instead of hundreds

# Q5. What is the difference between preventDefault() and stopPropagation() methods?

# Answer: 

# when we need to stop the browser’s default behavior that time we use preventDefault(); Ex:  form.addEventListener("submit", function (e) {e.preventDefault();  submit}); this form will not submit.
# when we need to stop the event from bubbling up to parent elements that time we use preventDefault(); Ex: child.addEventListener("click", function (e) {e.stopPropagation(); }); this event won't reach parent.


