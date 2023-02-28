
//   const hydrate = (plant) => {
//     return {
//       ...plant,
//       water: (plant.water || 0) + 1
//     }
//   }

//   const feed = (plant) => {
//     return {
//       ...plant,
//       soil: (plant.soil || 0) + 1
//     }
//   }
  
//   const energy = (plant) => {
//     return {
//       ...plant,
//       light: (plant.light || 0) +1
//     }
//   }
  
// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0 ) + value
    })
  }
}

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const bigFood = feed(5);
const normalFood = feed(1);
const waterPlus = hydrate(10);
const waterRegular = hydrate(1);
const doubleSun = giveLight(2);
const singleSun = giveLight(1);


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();