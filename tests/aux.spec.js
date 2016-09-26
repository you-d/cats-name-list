import { expect } from 'chai';

import * as Aux from '../src/js/aux.js';

describe('Aux Module', function() {
  const _sampleData1 = {};
  /*
  const _sampleData2 = [
    {"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},
    {"name":"Fido","type":"Dog"}]},
    {"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},
    {"name":"Steve","gender":"Male","age":45,"pets":null},
    {"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},
    {"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},
    {"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},
    {"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},
    {"name":"Nemo","type":"Fish"}]}
  ];*/
  /****************************************
   * checkLv1DataStructure
   ***************************************/
   describe('function: checkLv1DataStructure', function() {
       it("expect passing sample data #1 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData1) ).to.equal( false );
       });
       const _sampleData2 = {"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
       it("expect passing sample data #2 to return true", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData2) ).to.equal( true );
       });
       const _sampleData3 = {"name":"Bob","age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
       it("expect passing sample data #3 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData3) ).to.equal( false );
       });
       const _sampleData4 = {"name":"Bob","gender":"Male","age":23};
       it("expect passing sample data #4 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData4) ).to.equal( false );
       });
       const _sampleData5 = {"name":"Bob","gender":"","age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
       it("expect passing sample data #5 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData5) ).to.equal( false );
       });
       const _sampleData6 = {"name":"Bob","gender":"Male","age":23,"pets":[]};
       it("expect passing sample data #6 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData6) ).to.equal( false );
       });
       const _sampleData7 = {"name":"Bob","gender":0,"age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
       it("expect passing sample data #7 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData7) ).to.equal( false );
       });
       const _sampleData8 = {"name":"Bob","gender":"Male","age":23,"pets":0};
       it("expect passing sample data #8 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData8) ).to.equal( false );
       });
       const _sampleData17 = {"age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
       it("expect passing sample data #17 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData17) ).to.equal( false );
       });
       const _sampleData18 = {"name":"Bob","gender":"Male","age":23};
       it("expect passing sample data #18 to return false", function() {
           return expect( Aux.checkLv1DataStructure(_sampleData18) ).to.equal( false );
       });
   });

  /****************************************
  * checkLv2DataStructure
  ***************************************/
  describe('function: checkLv2DataStructure', function() {
      it("expect passing sample data #1 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData1) ).to.equal( false );
      });
      const _sampleData9 = {"name":"Garfield","type":"Cat"};
      it("expect passing sample data #9 to return true", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData9) ).to.equal( true );
      });
      const _sampleData10 = {"name":"Garfield","type":"Dog"};
      it("expect passing sample data #10 to return true", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData10) ).to.equal( true );
      });
      const _sampleData11 = {"name":"","type":"Dog"};
      it("expect passing sample data #11 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData11) ).to.equal( false );
      });
      const _sampleData12 = {"name":"Garfield","type":""};
      it("expect passing sample data #12 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData12) ).to.equal( false );
      });
      const _sampleData13 = {"name":"Garfield"};
      it("expect passing sample data #13 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData13) ).to.equal( false );
      });
      const _sampleData14 = {"type":"Cat"};
      it("expect passing sample data #14 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData14) ).to.equal( false );
      });
      const _sampleData15 = {"name":"Garfield","type":0};
      it("expect passing sample data #15 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData15) ).to.equal( false );
      });
      const _sampleData16 = {"name":0,"type":"Horse"};
      it("expect passing sample data #16 to return false", function() {
          return expect( Aux.checkLv2DataStructure(_sampleData16) ).to.equal( false );
      });
  });

  /****************************************
  * itsACat
  ***************************************/
  describe('function: itsACat', function() {
      it("expect passing sample data #1 to return false", function() {
          return expect( Aux.itsACat(_sampleData1) ).to.equal( false );
      });
      const _sampleData19 = {"name":"Garfield","type":"Cat"};
      it("expect passing sample data #19 to return true", function() {
          return expect( Aux.itsACat(_sampleData19) ).to.equal( true );
      });
      const _sampleData20 = {"name":"Garfield","type":"cat"};
      it("expect passing sample data #19 to return true", function() {
          return expect( Aux.itsACat(_sampleData20) ).to.equal( true );
      });
      const _sampleData21 = {"name":"Garfield","type":"Dog"};
      it("expect passing sample data #21 to return false", function() {
          return expect( Aux.itsACat(_sampleData21) ).to.equal( false );
      });
  });
});
