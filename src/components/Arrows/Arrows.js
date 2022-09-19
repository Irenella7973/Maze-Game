import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './Arrows.css';
import up_arrow from "../../resources/img/up-arrow.webp";
import left_arrow from "../../resources/img/left-arrow.webp";
import down_arrow from "../../resources/img/down-arrow.webp";
import right_arrow from "../../resources/img/right-arrow.webp";



function Arrows() {

  const [arrows, setArrows] = useState([])
  let step = useSelector(state => state.step)

  useEffect(() => {

    updateArrows()

  }, [step])

  const updateArrows = () => {

    const newArrows = [];
    let arrow = null;

    step.forEach((num) => {
      if (num === '1') arrow = up_arrow
      if (num === '2') arrow = right_arrow
      if (num === '3') arrow = down_arrow
      if (num === '4') arrow = left_arrow

      newArrows.push(<div key={uuidv4()} className="animate">
        <img className='img_arrow' src={arrow} alt="arrow"/>
        </div>)
    })
    
    function showArrows (index) {
              
      const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
              if (index === 10) reject(false)
              setArrows((prev) => {
                  return [...prev, newArrows.at(index)]
              })
              resolve(true)
          }, 1000)
      })

        promise.then(() => {
            showArrows(index + 1)
        }).catch(() => {
        })
        
    }
    setArrows([])
    showArrows(0)
  }


  return (
    <div className='arrows animate '>
        {arrows}
    </div>
  );
}

export default Arrows;
