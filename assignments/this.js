/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function favoriteFood(fave) {
    // "use strict"; -- "use strict" prevents from binding to the window
    return `My favorite food is ${this.fave}`;
  }
  
  console.log(favoriteFood("tacos"))

// Principle 2

// code example for Implicit Binding
const kawhi = {
    name: "Kawhi Leonard",
    team:  "Toronto Raptors",
    championships: 1,
    future: function() {
      return `${this.name}, of the ${this.team}, has only won ${this.championships} championship during his career.  He is trying to win his 2nd tomorrow night.`;
    }
  }
  
  const steph = {
    name: "Steph Curry",
    team:  "Golden State Warriors",
    championships: 3,
    future: function() {
      return `${this.name}, of the ${this.team}, has won ${this.championships} championships during his career.  He is trying to win his 4th tomorrow night.`;
    }
  }
  
  console.log(kawhi.future());
  console.log(steph.future());

// Principle 3

// code example for New Binding
function whoIsBetter(player) {
    this.insult = 'I am better than you, ';
    this.player = player;
    this.rationale = function() {
      console.log(this.insult + this.player + "!");
      console.log(this);
    };
  }
  
  const stephCurry = new whoIsBetter('Kevin Durant');
  const kevinDurant = new whoIsBetter('Steph Curry');
  
  stephCurry.rationale();
  kevinDurant.rationale();

// Principle 4

// code example for Explicit Binding
const steph = {
    name: "Steph Curry"
  }
  
  const cook = {
    name: "Quinn Cook"
  }
  
  function startingLineup(champion, mvp, name) {
    return `Here is your starting point guard for tonight's lineup.  A ${champion} time NBA champion and ${mvp} time league MVP, let's hear it for ${name}!`;
  }
  
  console.log(startingLineup.call(steph, 3, 3, "Steph Curry"));
  console.log(startingLineup.call(cook, 1, 0, "Quinn Cook"))