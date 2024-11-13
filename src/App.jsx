import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { GoSearch } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { slicesaction } from "./Redux/Store/Slices";
import { MdOutlineWater, MdOutlineWaterDrop } from "react-icons/md";
import { BiWater } from "react-icons/bi";
import logo from "./assets/homepics.webp";
import Lastrow from "./Components/Lastrow/Index";
import loding from './assets/isloadingpic.gif'

function App() {
  const name = useSelector((state) => state.rootreducer.name);
  const day = useSelector((state) => state.rootreducer.day);
  const date = useSelector((state) => state.rootreducer.date);
  const month = useSelector((state) => state.rootreducer.month);
  const temp = useSelector((state) => state.rootreducer.temp);
  const desc = useSelector((state) => state.rootreducer.desc);
  const hum = useSelector((state) => state.rootreducer.hum);
  const wind = useSelector((state) => state.rootreducer.wind);

  const dispatch = useDispatch();

  const [name1, setName] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [o, seto] = useState("");
  const [c, setc] = useState("");
  const [humidity, sethumidity] = useState("");
  const [wspeed, setwspeed] = useState("");

  let datearr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let montharr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let data = new Date();
  let T = data.getDate();
  let m = data.getMonth();
  let d = data.getDay();

  const [isloading, setisloading] = useState(false);
  const handleclick = async () => {

    setisloading(true)
    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name1}&appid=a541aebeee5807ae71dd0d1aee211c56&units=metric`
    );
    let data = await api.json();
    let imgpic = data.weather[0].icon;
    let temp = data.main.temp;
    let hum = data.main.humidity;
    let wind = data.wind.speed;
    let desc = data.weather[0].main;
    setisloading(false);
    dispatch(slicesaction.handlename(name1));
    dispatch(slicesaction.handleday(d));
    dispatch(slicesaction.handledate(T));
    dispatch(slicesaction.handlemonth(m));
    dispatch(slicesaction.handledesc(desc));
    dispatch(slicesaction.handletempareture(temp));
    dispatch(slicesaction.handlehumidity(hum + "%"));
    dispatch(slicesaction.handlewind(wind + " M/s"));

    seto("O");
    setc("C");
    sethumidity("Humidity");
    setwspeed("Wind Speed");

    setimgurl(imgpic);
    console.log(data);
    console.log(temp);
  };

  const handlechange = (e) => {
    let res = e.target.value;
    setName(res);
  };

  return (
    <>
      <div className="wethercontainer">
        <div className="wether">
          <div className="element">
            <div className="search">
              <input
                type="text"
                value={name1}
                onChange={handlechange}
                placeholder="Enter City Name"
              />
              <div className="searchicon">
                <i>
                  <IoSearch onClick={handleclick} className="icons" />
                </i>
              </div>
            </div>
            {date ? (
              <div>
                <div className="firstrow">
                  <div className="loction">
                    <i>{date && <CiLocationOn size={30} />}</i>
                    <span>{name}</span>
                  </div>
                  <div className="date">
                    {datearr.map((item, index) => {
                      return index == day && <span>{item},</span>;
                    })}
                    <div className="month">
                      <span>{date}</span>
                      {montharr.map((item, index) => {
                        return index == month && <span>{item}</span>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="firstrow">
                  <img
                    height="150px"
                    src={`https://openweathermap.org/img/w/${imgurl}.png`}
                    alt="icon"
                  />
                  <div className="temperture">
                    <h2>
                      {temp}
                      <span>
                        {" "}
                        <sup>{o}</sup>
                        {c}
                      </span>
                    </h2>
                    <span>{desc}</span>
                  </div>
                </div>
                <div className="firstrow">
                  <div className="humidity">
                    <i>
                      <MdOutlineWaterDrop size={50} color="white" />
                    </i>
                    <div className="temperture">
                      <span>{humidity}</span>
                      <h2>{hum}</h2>
                    </div>
                  </div>
                  <div className="humidity">
                    <i>
                      <BiWater size={50} color="white" />
                    </i>

                    <div className="temperture">
                      <span>{wspeed}</span>
                      <h2>{wind}</h2>
                    </div>
                  </div>
                </div>
                <div className="lastrow">
                  <Lastrow
                    imgurl={imgurl}
                    date={date}
                    montharr={montharr}
                    temp={temp}
                    day={day}
                    month={month}
                  />
                  <Lastrow
                    imgurl={imgurl}
                    date={date}
                    montharr={montharr}
                    temp={temp}
                    day={day}
                    month={month}
                  />
                  <Lastrow
                    imgurl={imgurl}
                    date={date}
                    montharr={montharr}
                    temp={temp}
                    day={day}
                    month={month}
                  />
                  <Lastrow
                    imgurl={imgurl}
                    date={date}
                    montharr={montharr}
                    temp={temp}
                    day={day}
                    month={month}
                  />
                  <Lastrow
                    imgurl={imgurl}
                    date={date}
                    montharr={montharr}
                    temp={temp}
                    day={day}
                    month={month}
                  />
                </div>
              </div>
            ) : isloading ? (
              <div className="loading">
                <img src={loding}  alt="isloading" />
              </div>
            ) : (
              <div className="wecomepage">
                <h2>WELCOME TO OUR WEATHER APPLICATION</h2>
                <img src={logo} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
