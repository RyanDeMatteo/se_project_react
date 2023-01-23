import logo from '../logo.svg';
import '../blocks/App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer"
import { location } from '../../utils/constants'
import { getForecastWeather } from '../utils/weatherAPI';
import secretKey from '../../secret'
import { filterDataFromWeatherAPI } from '../../utils/weatherAPI';
import { defaultClothingItems } from '../../utils/clothingItems';

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItem, setClothingItem] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview')
  }

  const closeAllModals = () => {
    setActiveModal();
  }

  React.useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, secretKey)
      .then((data) => {
        setWeatherData(filterDataFromWeatherAPI(data));
      })
      .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    setClothingItem(defaultClothingItems)
  })
}

export default App;
