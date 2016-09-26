import * as Aux from './aux.js';

export function processData(suppliedData) {
  // STEP 1 : Filter data based on owner's gender, and pet type. Grab all Cat type
  // pets, and store them in either maleOwnerCats or femaleOwnerCats array.
  let maleOwnerCats = [];
  let femaleOwnerCats = [];
  suppliedData.map( (anOwner)=> {
     if( Aux.checkLv1DataStructure(anOwner) ) {
          anOwner.pets.map( (aPet)=> {
              if( Aux.checkLv2DataStructure(aPet) ) {
                  if( Aux.itsACat(aPet) ) {
                      switch(anOwner.gender.toLowerCase().trim()) {
                          case "male":
                              maleOwnerCats.push(aPet.name);
                              break;
                          case "female":
                              femaleOwnerCats.push(aPet.name);
                              break;
                      }
                  }
              }
          });
      }
  });

  // STEP 2 : Sort both arrays in alphabetical order
  maleOwnerCats.sort();
  femaleOwnerCats.sort();

  // STEP 3 : Populate both markup lists in index.html
  let allCatsMarkup = '';
  maleOwnerCats.forEach( (aCatName)=> {
      allCatsMarkup += ('<li>' + aCatName + '</li>');
  });
  document.getElementById('maleOwnerCats').innerHTML = allCatsMarkup;
  allCatsMarkup = '';
  femaleOwnerCats.forEach( (aCatName)=> {
      allCatsMarkup += ('<li>' + aCatName + '</li>');
  });
  document.getElementById('femaleOwnerCats').innerHTML = allCatsMarkup;
  allCatsMarkup = '';
}
