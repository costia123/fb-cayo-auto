import React from "react";
//Styles
import styles from "./styles.module.css";
import Card from "components/abstract/card";
import CardSeparator from "components/abstract/CardSeparator";
//Images
const Car = {
    Title: "Voitures exclusive",
    icon: "car",
    text: "Notre entreprise propose des véhicules exclusifs !",
  };
const clefs = {
  Title: "Double de clefs",
  icon: "key",
  text: "Notre entreprise propose la creation de double de clefs à 100$ unité",
};
const GreyCard = {
  Title: "Carte grise",
  icon: "card",
  text: "Notre entreprise propose la creation de carte grise à 200$ unité pensez a vous munir d'une photo du véhicules",
};

function Services(props) {
  const { img, Title } = props;
  return (
    <>
      <div className={styles.MainBox}>
        <Card 
        Title={Car.Title} 
        icon={Car.icon} 
        text={Car.text} 
        />
        <CardSeparator />
        <Card 
        Title={clefs.Title} 
        icon={clefs.icon} 
        text={clefs.text} 
        />
        <CardSeparator />
        <Card
          Title={GreyCard.Title}
          icon={GreyCard.icon}
          text={GreyCard.text}
        />
      </div>
    </>
  );
}

export default Services;
