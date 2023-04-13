import { useEffect, useState, useRef } from "react";

//apollo
import { useQuery, gql } from "@apollo/client";

//icons
import ArrowDown from "../assets/img/Arrow - Down.png";
import Img1 from "../assets/img/pexels-spacex-586056 1.png";
import Img2 from "../assets/img/pexels-mikhail-nilov-7672013 1.png";
import Img3 from "../assets/img/image 2.png";
import HeaderFav from "../assets/img/Heart.png";

//components
import Header from "../components/Header/Header";
import Carousel from "../components/Slider/Carousel";

//styles
import "./styles.scss";

//types
import { Rockets, Flights } from "../types";


function Home() {
  const ref1 = useRef<HTMLHeadingElement>(null);

  //scroll
  const buttonHandler = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };

  //static pictures for cards
  const pictures = [Img1, Img2, Img3];

  //rockets state
  const [rockets, setRockets] = useState<Flights[]>([]);

  const ROCKETS_QUERY = gql`
    query {
      rockets {
        id
        name
        description
      }
    }
  `;
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  //set rockets after data has been fetched and push pictures into objects
  useEffect(() => {
    const newArray = data?.rockets?.map((item: Rockets, index: number) => {
      const pictureIndex = index % pictures.length;
      return {
        ...item,
        picture: pictures[pictureIndex],
      };
    });
    setRockets(newArray);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);


  //simple loading & error
  if (loading)
    return <p style={{ fontSize: "36px", textAlign: "center" }}>Loading...</p>;
  if (error)
    return (
      <p style={{ fontSize: "36px", textAlign: "center" }}>
        Error {error.message}
      </p>
    );

  return (
    <>
      <Header src={HeaderFav} className={"primary"} />
      <section className="homeSection">
        <div className="homeTitle">
          <h2>The space is waiting for</h2>
          <h3>you</h3>
        </div>
        <div
          className="exploreTours"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
          onClick={buttonHandler}
        >
          <p>Explore Tours</p>
          <img src={ArrowDown} alt="flights" style={{ height: "25px" }} />
        </div>
      </section>
      <section className="flightsSection">
        <div className="container" style={{ position: "relative" }}>
          <h2 ref={ref1} className="title">
            {" "}
            Popular tours{" "}
          </h2>
          <Carousel data={rockets} />
        </div>
      </section>
    </>
  );
}

export default Home;
