import {useDispatch, useSelector} from 'react-redux';
import Counter from '../components/Counter/Counter';
import {decrease, increase, setDiff} from '../modules/counter';

const CounterContainer = () => {
    const {number, diff} = useSelector((state) => ({
        number: state.counter.count,
        diff: state.counter.diff,
    }));

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

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

export default CounterContainer;
