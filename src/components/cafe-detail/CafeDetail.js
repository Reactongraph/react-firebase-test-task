import React, { useEffect, useState } from "react";
import firebase from "../../Firebase";
import "./CafeDetails.css";

function CafeDetail() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const database = firebase.firestore().collection("Cafe");

    database.onSnapshot(onCollectionUpdate);
  });

  const onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { name, city, pincode, drink } = doc.data();
      boards.push({
        key: doc.id,
        name,
        city,
        pincode,
        drink,
      });
    });
    setState(boards);
  };

  return (
    <div className="container">
      {state &&
        Array.isArray(state) &&
        state.map((data) => {
          return (
            <div className="episode">
              <div className="episode-content">
                <div className="episode-tags">
                  <span className="tags tags--name">{data.name}</span>
                </div>
                <p className="episode-data">City: {data.city}</p>
                <p className="episode-data">Pincode: {data.pincode}</p>
                <p className="episode-data">Cafe Offers: {data.drink}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CafeDetail;
