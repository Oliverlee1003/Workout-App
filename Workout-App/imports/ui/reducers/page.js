import { combineReducers } from "redux";
import './../actions/page.js';

//TO-DO:
//simple page reducer, need to be updated later
const currentpageReducer = (currentpage = 'Gym', action) => {
  if (action.type === "UPDATE_PAGE") {
      return action.currentpage;
    }
  return currentpage;
};

const gymsReducer = () => {
    return [
        {
            name: "Ron Zalko's Fitness",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["6-10", "6-10", "6-10", "6-10", "6-8", "8-6", "8-5"]
        },
        {
            name: "Ron Zalko's Fitness2",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["mon 6-10", "Tues 6-10", "wed 6-10", "thurs 6-10", "fri 6-8", "sat 8-6", "sun 8-5"]

        },
        {
            name: "Ron Zalko's Fitness3",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["6-10", "6-10", "6-10", "6-10", "6-8", "8-6", "8-5"]

        }
    ]
};

export default combineReducers({
    currentpage: currentpageReducer,
    gymsReducer: gymsReducer
});