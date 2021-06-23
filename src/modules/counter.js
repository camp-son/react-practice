// 액션 타입
const prefix = 'counter/';
const SET_DIFF = `${prefix}SET_DIFF`;
const INCREASE = `${prefix}INCREASE`;
const DECREASE = `${prefix}DECREASE`;

// 액션 = 함수 만들기
export const setDiff = (diff) => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 초기 상태 선언
const initialState = {
    count: 0,
    diff: 1,
};

// 리듀서 선언
const counter = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return {
                ...state,
                count: state.count + state.diff,
            };
        case DECREASE:
            return {
                ...state,
                count: state.count - state.diff,
            };
        default:
            return state;
    }
};

export default counter;
