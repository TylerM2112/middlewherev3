# Middlewhere Coding Style Guide
We're going to follow MOST of the styling guide from [AirBnB](https://github.com/airbnb/javascript/tree/master/react).

Take some advise from the [Clean Code Javascript Guide](https://github.com/ryanmcdermott/clean-code-javascript).
```js
functionName (param1, param2) => {
  let newVariable = param1.slice()
                      .trim()
                      .map( 
                        ( param3, param4 ) => { 
                          // Comments go here.
                          return [ params3, param4 ];
                        }
                      );
}
```

#### Use ES6 functions instead of regular ES5 functions 

```js
//bad
function myNewFunc( param1, param2 ) {
  return [ param1, param2 ];
}

//good 
myNewFunc => ( param1, param2 ) {
  return [ param1, param2 ];
}
```

#### Chaining functions happen on different lines
The first function should be on the first line then the rest of the chain should be on seperate lines

```js
// bad
newArr.trim().splice().filter( el => el.name === 'Bob' ).join().toLowerCase();

//good
newArr.trim()
  .slice()
  .filter( el => el.name === 'Bob' )
  .join()
  .toLowerCase();
```

#### If a function and it's functionality can fit on one line do it. If not, seperate it onto one line. Noone wants to read a huge one-liner

```js
//bad
newArr.filter( el => { console.log( el ); return el.name === 'Bob'; });

//good
newArr.filter( el => {
  console.log( el );
  return el.name === 'Bob';
});
```
#### Spaces between {}, [], (), = and, commas
Exception is with JSX curly braces. There should be no spaces with curly braces.

```js
//bad
let newObj = {name:'Bob',gender:'Male'};
let newFunc = (param1,param2) => [param1,param2];
<Foo bar={ baz } />

//good
let newObj = { name: 'Bob', gender: 'Male' };
let newFunc = ( param1, param2 ) => [ param1, param2 ];
<Foo bar={baz} />

```
### Naming 
**Components:** Component names should be in PasalCase e.g. `ProfileView.js`

**Reference Naming:** References to a component (or a variable in general) should be in camelCase. e.g. `let profileView = <ProfileView />`

**Constant Variables:** Constant variables should be in UPPER_CASE. e.g. `const NEW_CONST_VAR = 'My name is Bob';`

####Alignment
* Props for a component should be on seperate lines if there is more than one.

* The ending closing tag (/>) should be where the begining chevon is. 



```js
//bad
<ProfileView superLongPropName = "someFunc()" superLongPropNameDos = "this.state.getOut" />

//good
<ProfileView 
  superLongPropName = "someFunc()" 
  superLongPropNameDos = "this.state.getOut" 
/>
```
#### Quotes
Always use double quotes (") for JSX attributes, but single quotes (') for all other JS.

Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

```js

// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

#### Omit the value of a prop if it is explictly true
`this.props.hidden` will come back true if it gets past regradless.
```js
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />

```

#### Always include an `alt` prop on `<img>` tags. If the image is presentational, `alt` can be an empty string or the `<img>` must have `role="presentation"`.
```js
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```

#### Avoid using an array index as key prop, prefer a unique ID.

```js
// bad
{todos.map(( todo, index ) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map( todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

#### Comments
* A small (1 or 2 sentence) comment about what the function does should supercede the functiom. This is so when the function is done it can be collapsed and we still know what the function does.

* After development of a function, write a comment with what types of parameters are passed and what type of variable is being returned (void if the function doesn't return anything).

#### 2 spaces for TABS
#### Use mapDispatchToProps 
