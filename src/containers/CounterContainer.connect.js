import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import Counter from '../components/Counter/Counter';
import {decrease, increase, setDiff} from '../modules/counter';

const CounterContainer = ({
    number,
    diff,
    onIncrease,
    onDecrease,
    onSetDiff,
}) => {
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
};

const mapStateToProps = (state) => ({
    number: state.counter.count,
    diff: state.counter.diff,
});

// 1. 기본 형태
// const mapDispatchToProps = (dispatch) => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

// 2. bindActionCreators 사용
// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             onIncrease: increase,
//             onDecrease: decrease,
//             onSetDiff: setDiff,
//         },
//         dispatch
//     );

// 3. bindActionCreators 대신 connect가 생성
const mapDispatchToProps = {
    onIncrease: increase,
    onDecrease: decrease,
    onSetDiff: setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
