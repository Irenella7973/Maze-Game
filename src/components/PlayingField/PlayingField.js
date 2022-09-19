import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './PlayingField.css'
import Card from '../Card/Card';
import CardWithFlag from '../CardWithFlag/CardWithFlag';
import { LOAD_CARDS, GENERATE_STEP, GET_ANSWER } from '../../store/actionTypes';



function PlayingField() {

  const cards = useSelector(state => state.cards)
  const dispatch = useDispatch()

  function createArrOneZero() {
    let arr = [0,0,0,0,0,0,0,0,0]
    arr[Math.floor(Math.random() * arr.length)] = 1;
    return arr
  }
  const arrOneZero = createArrOneZero();

  function generationStep (arrOneZero) {
    let indexOne = arrOneZero.indexOf(1)
  
    let hash = {
      0: { 2:1, 3:3 },
      1: { 2:2, 3:4, 4:0 }, 
      2: { 3:5, 4:1 },
      3: { 1:0, 2:4, 3:6 },
      4: { 1:1, 2:5, 3:7, 4:3 },
      5: { 1:2, 3:8, 4:4 },
      6: { 1:3, 2:7 },
      7: { 1:4, 2:8, 4:6 },
      8: { 1:5, 4:7 }
    }
    let arrArrows = [];
    let winCell = []

    for (let i = 0; i <= 9; i++) {
      let hashNotAllowed = {
        1 : 3,
        3 : 1,
        2 : 4,
        4 : 2,
      }

      let prevArrow = arrArrows[arrArrows.length-1]
      let keysFirstCell = Object.keys(hash[indexOne])
      let delet = hashNotAllowed[prevArrow]

      if(delet) {
        keysFirstCell = keysFirstCell.filter((num) => num !== String(delet))
      }
      let randomKey = Math.floor(Math.random() * keysFirstCell.length)

      let step = keysFirstCell[randomKey]
      arrArrows.push(step)
  
      indexOne = hash[indexOne][step]
      winCell.push(indexOne)
    }

    return [arrArrows,[winCell[winCell.length-1]]]
  }
  
  let [arrArrows, trueAnswer] = generationStep(arrOneZero)


  const [playAgain, setPlayAgain] = useState(0)

  function changeStatusGame() {
    setPlayAgain((playAgain) => playAgain+1)
  }

 useEffect(() => {
   dispatch({ type: LOAD_CARDS, payload: arrOneZero});
   dispatch({type: GENERATE_STEP, payload: arrArrows})
   dispatch({type: GET_ANSWER, payload: trueAnswer})
 }, [playAgain])

  return (
    <>
      <div className='cards'>
        { cards.map((square,i) => (
     
            square === 0 ? 
          
            <Card numberCard={i} key={uuidv4()} />
            :
            <CardWithFlag numberCard={i} key={uuidv4()} />
            )) 
        } 
      </div>
      <button className='btn-again' onClick={changeStatusGame}>Еще раз</button>
     </>
  );
}
export default PlayingField;


