
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

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0 ) + value
    });
  };
};

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");

const bigFood = changeState("feed")(5);
/* const normalFood = changeState("feed")(1);
const waterPlus = hydrate(10);
const waterRegular = hydrate(1);
const doubleSun = giveLight(2);
const singleSun = giveLight(1);
 */

window.onload = function() { 

  document.getElementById('feed').onclick = function() {
    const newState = stateControl(bigFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.feed}`;
  };

  document.getElementById('show-state').onclick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.feed}`;
  };
};