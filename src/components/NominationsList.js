import { connect } from "react-redux";
import { updateNoms } from '../actions';
import Nomination from './Nomination';

function NominationsList(props) {

  return (
    <div className={props.nominations.length > 4 ? "nominations completed" : "nominations"}>
      <h4>Your Nominations: (click to remove)</h4>
      {props.nominations.map(nom => (
        <Nomination nom={nom} />
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