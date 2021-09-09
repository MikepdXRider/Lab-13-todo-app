## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


Build for one user. If enough time exists, move towards multiple users. 


## Signup

### HTML
 - Form for username and password.

### Event
 - Form submit:
    - Validate that the user doens't already exit.
        - If not, Creates a new object and sends it to storage. (Object name would be the localStorage.setItem('username', obj))
        - If yes, login and redirect to todo page 



## Login

### HTML
- Form for username and password. 

### Event
- Form submit:
    - Validate that user exists.
        - If Not, redirect to sign up page.
        - If yes, redirect to todo and render local storage data to to-do. 



## To-do

### HTML
- A form to add new todos
- Div to inject todos into. 

### Event
- Page load:
    - Access local storage.
    - Loop over the incomplete todos and for each todo crfeate a li of some kind and append it to our ul.
    - Loop over the complete todos and for each todo create an li of some kind and append it to our ul.
- On submitting a new todo form
    - Update State:
        - Access form data
        - Create a todo object and push it into the todos array.(id, completed status, and description.)
        - Create an li and append it to our ul.
- On click/completion of todo:
    - Update styling to strike a line through textcontent.
    - Find todo object and update the completed status to completed. 
    - Splice around the object, and place the completed todo at end of DOM.(STRETCHY: Optional)



## Data modeling
    ``` js
    storageObj = {
        username: {
            password: jflkdsjgdls
            To-dos: [
                {
                    id: 1,
                    completed: false,
                    description: 'stuff to do'
                },
                {
                    id: 2,
                    completed: false,
                    description: 'stuff to do'

                }

            ]
        }

    }
    ```

## Function
- renderToDos()
    - CLEAR OUT THE OLD TODOS FROM THE DOM (`'ul. textContent = ""'`)
    - Get todos from local storage
    - Loop through todos, create an li and append it to ul.
    - When we loop, render complted todos differently from incomplete todos. 

### Local Storage
- getTodos()
    - Return an array of todos.

    
- setTodos(todos array)
    - Put the todos in the right place in local storage

- addTodo(form message)
    - Create a todo using this message and put it into local storage.
    - Increment idAcc. Set new object id to new idAcc value. 


- completeTodo(id)
    - Find the correct todo in your array.
    - Set that todo to 'completed: true'


- getUser()
    - Find and return the correct user from local storage.
    
- setUser(user)
    - Sends user Obj to local storage.

## STRETCH:
- findUser(username)
        - Loops through storage object and returns the correct user. 
- Use query strings to pass user name along so each page 
    