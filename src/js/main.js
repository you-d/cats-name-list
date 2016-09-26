import axios from 'axios';
import * as Process from './process.js';

/**************************************************
 * DESIGN DECISION :
 **************************************************
 * Instead of relying on 3rd party library to sort the retrieved JSON response
 * (such as Lodash.sortBy), I decided to filter the retrieved data, store
 * the name of all cats in either one of 2 arrays(maleOwnerCats, & femaleOwnerCats),
 * and finally sort both arrays with JS sort function.
 *
 * The benefit of this approach are :
 * - Reduce Source code footprint.
 *   It's not necessary to include a 3rd party sorting library in the source code.
 * - Better Performance.
 *   Sorting 2 non-multidimensional arrays of string with JS sort function is
 *   definitely much faster than sorting a JSON object with a 3rd party library.
 **************************************************
 * HOW TO RUN THIS SOURCE CODE :
 **************************************************
 * Simply view the "index.html" file in any web browsers (double click the file).
 * The source code doesn't come with any backend code. Its purely frontend JS script.
 *
 * Additional notes:
 * Don't forget to install the "CORS Toggle" Browser extension
 * to enable the source code to retrieve the JSON Object from the
 * API Endpoint.
 * The source code utilises ES6 Babel Transpiler to convert ES6 code in ES5.
 * Run 'npm start' in a node.JS environment after modifying the source code. 
 **************************************************/

/**************************************************
 * Perform the GET request to get the sample data
 **************************************************
 * DEV_NOTE :
 * It appears that the supplied API endpoint doesn't
 * support Cross Origin Resouce Sharing (CORS) for AJAX
 * requests from any origin.
 * To alleviate this issue, I installed the 'CORS Toggle'
 * extension in my Google Chrome Browser to enable
 * my source code to successfully retrieve the JSON
 * response from the API endpoint.
 **************************************************/

// DEV_NOTE : The following config doesn't work.
//let config = {
//    headers: { 'Accept': 'application/json',
//               'Content-Type': 'application/json',
//               'Access-Control-Allow-Origin': '*' }
//};

let config = {
    headers: { 'Accept': 'application/json',
               'Content-Type': 'application/json' }
};

axios.get('http://agl-developer-test.azurewebsites.net/people.json', config)
     .then( (response)=> {
          if (response.status == 200) {
              Process.processData(response.data);
          }
      })
     .catch( (error)=> {
          let errorMsg = '<p>[ERROR] Empty Response</p>';
          document.getElementById('maleOwnerCats').innerHTML = errorMsg;
          document.getElementById('femaleOwnerCats').innerHTML = errorMsg;
          console.log('ERROR [FETCHING DATA] : ' + error);
     });
