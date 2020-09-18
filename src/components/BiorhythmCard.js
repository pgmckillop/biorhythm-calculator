import React from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";

function BiorhythmCard({ targetDate }) {
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{targetDate}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: 83%</p>
        <p>Emotional: 33%</p>
        <p>Intellectual: 83%</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;
