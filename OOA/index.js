/*const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
  };
  
  
  console.log(adventurer.inventory[0]); // Output: sword
  
 
  for (const item of adventurer.inventory) {
    console.log(item);
  }
*/

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  
  console.log(adventurer.name);                          // Output: Robin
  console.log(adventurer.companion.name);                // Output: Leo
  console.log(adventurer.companion.type);                // Output: Cat
  console.log(adventurer.companion.companion.name);      // Output: Frank
  console.log(adventurer.companion.companion.type);      // Output: Flea
  console.log(adventurer.companion.companion.belongings);// Output: [ 'small hat', 'sunglasses' ]
  
  adventurer.roll();
  adventurer.roll(5);
  adventurer.roll(-2);
  