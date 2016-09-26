import axios from 'axios';
import * as Process from './process.js';

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
