import { connect } from "react-redux";
import { updateNoms } from '../actions';

function Nomination(props) {

    const handleClick = e => {
        e.preventDefault();
        props.updateNoms(props.nom, props.nominations)
    }

    return (
        <div className='nom-item'>
            <p onClick={handleClick}>{props.nom}</p>
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
)(Nomination);