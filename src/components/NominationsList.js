function NominationsList(props) {
    return (
      <div className="nominations">
        <h4>Your Nominations:</h4>
          {props.noms.map(nom => (
            <p>{nom}</p>
          ))}
      </div>
    );
  }
  
  export default NominationsList;