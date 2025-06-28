import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
import {useState} from "react";
import PublicIcon from '@mui/icons-material/Public';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 37.81,
        humidity: 62,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Earth<PublicIcon/></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}