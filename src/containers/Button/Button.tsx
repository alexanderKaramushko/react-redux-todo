import { connect } from "react-redux";
import Button from "../../components/atoms/Button";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { setVisibilityFilter } from "../../store/filters/actions";
import { Props } from "./types";

const mapStateToProps = (state: AppState, ownProps: Props) => ({
    active: ownProps.filter === state.filters.activeFilter
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);