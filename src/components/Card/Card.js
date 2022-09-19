import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import './Card.css';
import win from '../../resources/img/win.png'
import finger_down from '../../resources/img/finger_down.webp'



function Card({numberCard}) {

  const [clicked, setClicked] = useState()
  const [trueAnswer] = useSelector(state => state.answer)


  function clickCard() {
    if(numberCard === trueAnswer) {
      setClicked('win')
    } else {
      setClicked('loose')
    }
  }

  return (
    <>
       {
        clicked === 'win'
        ? 
        <div className='card-win'>
           <img className='img-win' src={win} alt='win' />
        </div> 
        :
        clicked === 'loose' 
        ?
        <div className='card-loose'>
          <img className='img-finger-down' src={finger_down} alt='loose' />
         </div>
        :
        <div className='card' onClick={clickCard}></div>
      }
         
     </>
  );
}

export default Card;
