import {
    initialStage,
    stageOne,
    stageTwo,
    stageThree,
    stageFour,
    stageFive,
    finalStage,
  } from "./stages/index.js";
  
  import { storage } from "./storage.js";
  
  export const stages = [
    {
      descricao: "Welcome",
      stage: initialStage,
    },
    {
      descricao: "Menu",
      stage: stageOne,
    },
    {
      descricao: "MenuItens",
      stage: stageTwo,
    },
    {
      descricao: "Address",
      stage: stageThree,
    },
    {
      descricao: "Bill",
      stage: stageFour,
    },
    {
      descricao: 'New Order',
      stage: stageFive,
    },
    {
      descricao: 'Assistent',
      stage: finalStage,
    }
  ];
  
  export function getStage({ from }) {
    if (storage[from]) {
      return storage[from].stage;
    } else {
      storage[from] = {
        stage: 0,
        itens: [],
        address: "",
      };
  
      return storage[from].stage;
    }
  }
  