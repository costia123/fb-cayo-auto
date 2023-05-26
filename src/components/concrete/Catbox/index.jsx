import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getStrapiPage } from "redux/strapi/action";
//Styles
import styles from "./styles.module.css";

//Comp
import Box from "components/abstract/box";

function Catbox() {
  const strapi = useSelector((state) => state.strapi);
  const [selectCat, setSelectCat] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.MainBox}>
        <div className={styles.leftcol}>
          <button
            className={styles.resetBTN}
            onClick={() => {
              setSelectCat(null);
            }}
          >
            Vider les champs
          </button>
          <input className={styles.searchCar} placeholder="Véhicule souhaité" />
          <h3 style={{ color: "white", marginBlock: "25px" }}>Catégories :</h3>
          {strapi.strapiCat
            ? strapi.strapiCat.map((item, index) => {
                return (
                  <>
                    <button
                      className={styles.acatlist}
                      key={index}
                      onClick={() => {
                        setSelectCat(item.attributes.type);
                      }}
                    >
                      {item.attributes.Titre}
                    </button>
                  </>
                );
              })
            : null}
        </div>
        <div className={styles.rightcol}>
          {strapi.strapiCat
            ? strapi.strapiCat.map((item, index) => {
                return (
                    <div key={index}>
                      {selectCat === null ?  
                     (

                        <>
                        <div className={styles.catBand}>{item.attributes.Titre}</div>
                  <div className={styles.Cardcont}>
                    {strapi.StrapriCar.map((cars, index) => {
                        if (cars.attributes.type === item.attributes.type) {
                            return (
                                <div className={styles.card} key={index}>
                            <img
                              className={styles.CardImg}
                              src={`http://localhost:1337${cars.attributes.images.data[0].attributes.url}`}
                              />
                            <p className={styles.CarName}>
                              {cars.attributes.Nom}
                            </p>

                            <p className={styles.CarPrice}>
                              $ {cars.attributes.price}
                            </p>
                          </div>
                        );
                      } else {
                          return null;
                      }
                  })}
                  </div>
                  </>)
                    : selectCat === item.attributes.type ? (

                        <>
                        <div className={styles.catBand}>{item.attributes.Titre}</div>
                  <div className={styles.Cardcont}>
                    {strapi.StrapriCar.map((cars, index) => {
                        if (cars.attributes.type === item.attributes.type) {
                            return (
                                <div className={styles.card} key={index}>
                            <img
                              className={styles.CardImg}
                              src={`http://localhost:1337${cars.attributes.images.data[0].attributes.url}`}
                              />
                            <p className={styles.CarName}>
                              {cars.attributes.Nom}
                            </p>

                            <p className={styles.CarPrice}>
                              $ {cars.attributes.price}
                            </p>
                          </div>
                        );
                      } else {
                          return null;
                      }
                  })}
                  </div>
                  </>) : null}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default Catbox;
