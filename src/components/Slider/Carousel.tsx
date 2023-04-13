import Slider from "react-slick";

//components
import { useSetRecoilState } from "recoil";
import { favState } from "../../store";

//icons
import HeaderFav from "../../assets/img/Heart.png";

//styles
import "./styles.scss";

//components
import ArrowNext from "../../components/Arrows/ArrowNext";
import ArrowPrev from "../../components/Arrows/ArrowPrev";

//types
import { Flights } from "../../types";

type Props = {
  data?: Flights[];
  item?: Flights;
};

function Carousel({ data }: Props) {
  //const setFav = useSetRecoilState(favState);
  const setFav = useSetRecoilState(favState);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };

  const addItem = (item: Flights) => {
    //@ts-ignore
    setFav((oldFav) => [...oldFav, item]);
  };
  return (
    <Slider {...settings}>
      {data?.map((item: Flights) => (
        <div key={item.id} className="card">
          <img src={item.picture} alt="card" className="cardImg" />
          <div className="cardInfo">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <div className="cardAction">
            <button className="buyButton">buy</button>
            <button className="favButton" onClick={() => addItem(item)}>
              <img
                src={HeaderFav}
                alt=""
                style={{ width: "19px", height: "18px", margin: "auto" }}
              />
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
