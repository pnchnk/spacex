import React from "react";
import Header from "../components/Header/Header";

//recoil
import { favState } from "../store";

//react-router-dom
import { Link } from "react-router-dom";

//icons
import HeaderFavLight from "../assets/img/HeartW.png";
import DeleteIcon from "../assets/img/Delete.png";

//recoil
import { useRecoilState, useRecoilValue } from "recoil";

//types
import { Flights } from "../types";

function Favorites() {
  //recoil
  const favoriteFlights = useRecoilValue<Flights[]>(favState);
  const [favList, setFavList] = useRecoilState(favState);

  const removeFlight = (flight: Flights["id"]) => {
    const newList = favList.filter((item: Flights) => item.id !== flight);
    setFavList(newList);
  };

  const clearFlights = () => {
    const newList: any = [];
    setFavList(newList);
  };
  return (
    <>
      <Header src={HeaderFavLight} className={"favorites"} />
      <section className="favSection">
        <div className="favTitle">
          <h2>Favorites</h2>
        </div>
      </section>
      <div className="favCardsSection">
        <div className="container">
          {!favoriteFlights.length ? (
            <p style={{ textAlign: "center" }}>
              Your favorite page is empty. Go to{" "}
              <Link
                to={"/"}
                style={{ color: "black", textDecoration: "underline" }}
              >
                home page
              </Link>
            </p>
          ) : (
            <p onClick={clearFlights} style={{ cursor: "pointer" }}>
              Clear All
            </p>
          )}
          <div className="favCardsRow">
            {favoriteFlights?.map((item) => (
              <div key={item.id} className="favCard">
                <img src={item.picture} alt="card" className="favCardImg" />
                <div className="favCardInfo">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="favCardAction">
                  <button className="buyButton">buy</button>
                  <button
                    className="favButton"
                    onClick={() => removeFlight(item.id)}
                  >
                    <img
                      src={DeleteIcon}
                      alt="delete"
                      style={{ width: "24px", height: "24px", margin: "auto" }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
