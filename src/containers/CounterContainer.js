import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Counter from '../components/Counter/Counter';
import {decrease, increase, setDiff} from '../modules/counter';

const CounterContainer = () => {
    // const {number, diff} = useSelector((state) => ({
    //     number: state.counter.count,
    //     diff: state.counter.diff,
    // }));
    const {count: number, diff} = useSelector((state) => state.counter);
    // 1. useSelector 최적화: 객체가 아닌 항목별로 사용한다.
    // const number = useSelector((state) => state.counter.count);
    // const diff = useSelector((state) => state.counter.diff);
    // 2. shallowEqual을 사용한다.
    // const {number, diff} = useSelector(
    //     (state) => ({
    //         number: state.counter.count,
    //         diff: state.counter.diff,
    //     }),
    //     shallowEqual
    // );

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
