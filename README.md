# cats-name-list #
Utilised techs and tools:
* JavaScript (ES 2015)
* Axios - To consume the API endpoint by performing the GET request
* Gulp - to kickstart Webpack
* Webpack - To transform ES2015 code into ES5 code through Babel Transpiler

### Design Decisions: ###
Instead of relying on 3rd party library to sort the retrieved JSON response
(such as Lodash.sortBy), I decided to filter the retrieved data, store
the name of all cats in either one of 2 arrays(maleOwnerCats, & femaleOwnerCats),
and finally sort both arrays with JS sort function.

Benefits of this approach are :
* Reduce Source code file size.
It's not necessary to include a 3rd party sorting library in the source code.
* Better Performance.
Sorting 2 non-multidimensional arrays of string with JavaSript sort function is
definitely much faster than sorting a nested JSON object with a 3rd party library.

### How to run the source code: ###
Simply view the "index.html" file in any web browsers (double click the file).
The source code doesn't come with any backend code. Its purely frontend JS script.
Additional notes:
* Don't forget to install the "CORS Toggle" Browser extension
to enable the source code to retrieve the JSON Object from the
API Endpoint.
* The source code utilises ES6 Babel Transpiler to convert ES6 code in ES5.
Run 'npm start' in a node.JS environment after modifying the source code.

### Alternative approach: ###
With React.JS, I would be able to utilise the shouldComponentUpdate method to
improve the performance of the View component rendering.

The idea is that the source code can be broken down into 3 React components :
An owner component that will serve as the layout of the app, and two ownee
components. Each ownee component represents a table (male or female cat owner)
in the UI.

The owner component will be responsible to retrieve the JSON object from the API
endpoint, and populate both maleCatOwners, and femaleCatOwners arrays. Both arrays
will be stored inside two React states, one state for each array.

Each state will be passed down to each ownee component. Both ownee components will
call the 'shouldComponentUpdate' method to check whether the content of the state
is equal to the version of array that each component already possess.

With this approach, we can ensure that only the ownee component with the state that
has already been updated will be re-rendered.

Considering React.JS is library to build complex User Interfaces, I would say its way too overkill to utilise the library in this assessment. Unless if we are dealing
with a large set of data, and the JSON object will be updated frequently, then
I don't think it is necessary to implement this alternative approach.  
