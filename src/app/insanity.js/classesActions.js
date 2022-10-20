import sanityAPI from '../../sanitySetup';
import { CLASSES_FETCH_FAIL, CLASSES_FETCH_REQUEST, CLASSES_FETCH_SUCCESS, CLASS_FETCH_FAIL, CLAnpm SS_FETCH_REQUEST, CLASS_FETCH_SUCCESS } from './workshopsConstants';

const fetchAllClasses = () => async (dispatch) => {

        // above is same as
// const fetchAllClasses = () => {
//     return async (dispatch) => {

    try {
        dispatch({
            type: CLASSES_FETCH_REQUEST
        });
        const data = await sanityAPI.fetch(
            `*[type == 'class']{

                _id,
                "month": month
                // "poster": poster.asset->url,
            } `
        );
        dispatch({
            type: CLASSES_FETCH_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CLASSES_FETCH_FAIL,
            payload: error.message
        });
    }
};