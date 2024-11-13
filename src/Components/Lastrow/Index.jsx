import React from 'react'
import styles from './index.module.css'
const Lastrow = ({imgurl,day,month,temp,date,montharr}) => {
  return (
    <>
     <div className={styles.lastcontainer}>
     <div className="date">
                <div className="month">
                  <span>{date}</span>
                  {montharr.map((item, index) => {
                    return index == month && <span>{item}</span>;
                  })}
                </div>
              </div>
        <div className="date">
            <img src={`https://openweathermap.org/img/w/${imgurl}.png`} alt="icons" />
        </div>
        <div className="date">
            <h2>{temp}<span><sup>.</sup>C</span></h2>
        </div>
     </div>
    </>
  )
}

export default Lastrow
