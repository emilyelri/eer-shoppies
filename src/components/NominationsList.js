import { connect } from "react-redux";
import { updateNoms } from '../actions';

function NominationsList(props) {
  return (
    <div className="nominations">
      <h4>Your Nominations:</h4>
      {props.nominations.map(nom => (
        <div className='nom-item'>
          <p>{nom}</p>
          {/* <p onClick={props.updateNoms(nom, props.nominations)}>⌫</p> */}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  nominations: state.nominations,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { updateNoms }
)(NominationsList);