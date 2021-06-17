# React foundation tutorial

> 벨로퍼트님의 (벨로퍼트와 함께하는 모던 리액트)[https://react.vlpt.us/]로 학습한 내용을 정리하였습니다.

## 함수형 컴포넌트

### 기본 형태

- Javascript의 함수를 기반으로 컴포넌트를 선언할 수 있다.

```jsx
export default function Component(props) {
	// ...

	return (
		// ...
	);
}

Component.defaultProps = {
	// ...
};
```

### JSX

- XML 형태로 템플릿 코드를 작성하면 Babel이 Javascript 코드로 변환시켜 준다.
- XML 형태를 유지해주어야 하기 때문에 항상 태그는 닫히는 태그가 항상 있어야 한다.
- 태그는 항상 root 태그가 있어야 한다.

```jsx
export default function Component() {
  return (
    <div>
      <h1></h1>
      <input />
      <hr />
      <br />
      <p></p>
    </div>
  );
}
```

### Fragment

- JSX에서는 항상 root 태그가 있어야 하는데, root 태그가 불필요한 경우 Fragment `<></>`를 사용할 수 있다.
- 본 명칭은 React.Fragment이지만 축약형으로 사용할 수 있다.

```jsx
export default function Component() {
  /**
   * 실제 돔에는 h1과 div만 노출된다.
   */
  return (
    <>
      <h1></h1>
      <div></div>
    </>
  );
}
```

### Props

- 함수의 인자로 `props`가 넘어오고, 컴포넌트의 사용처에서 속성으로 값을 전달해주는 것이다.
- `props.children` 속성은 사용처에서 컴포넌트 태그 안에 있는 정보를 담고 있다.

```jsx
export default function Component({ children, ...props }) {
  return <div style={{ color: props.color }}>{children}</div>;
}
```

### useState

- 컴포넌트에서 상태를 관리할 수 있도록 react에서 제공하는 함수이다.
- 인자로 초기값을 받으며, 반환되는 값은 배열로 초기값을 담는 변수와 초기값의 setter이다.

```jsx
import { useState } from "react";
export default function Component() {
  const [num, setNum] = useState(0 /* 초기값 */);

  const onIncrease = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}
```

- 여러개의 값을 하나의 컴포넌트에서 관리할 때에는 `useState`의 인자값을 Object 형태로 넣어줄 수 있다.

```jsx
import { useState } from "react";
export default function Component() {
  const [people, setPeople] = useState({
    name: "",
    nickname: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setPeople((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onReset = () => {
    setPeople({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <button onClick={onReset}>초기화</button>
    </div>
  );
}
```

### useRef

- 기존에 DOM을 접근할 때에는 DOM API에서 제공하는 getElementById, querySeletor 등을 사용하였습니다.
- React에서는 `useRef`로 참조값을 생성하고, 그 참조값을 DOM의 `ref` 속성에 매핑시켜줄 수 있다.
- 생성된 변수의 `current` 속성에 참조시킨 DOM을 접근할 수 있다.

```jsx
import { useRef } from "react";
export default function Component() {
  // ...
  const nameInput = useRef();
  // ...

  const onChange = () => {
    nameInput.blur();
  };

  // ...

  return <input ref={nameInput} onChange={onChange} />;
}
```

### Array

- 배열을 사용할 때엔 `map`과 같이 Array에서 제공하는 함수를 이용하여 배열을 템플릿 목록으로 치환하여 사용합니다.
- `key`값은 각 항목의 고유키로 값을 설정해주어야 React가 효율적으로 업데이트 할 수 있습니다.

```jsx
export default function Component() {
	const seats = {
		{id: 1, name: 'VIP'},
		{id: 2, name: 'NORMAL'},
		{id: 3, name: 'FAMILY'}
	};

	return (
		<div>
			{seats.map((seat) => <div key={seat.id}>{seat.name}</div>)}
		</div>
	);
}
```

### useEffect

- 컴포넌트가 mount, unmount, update 될 때 특정 작업을 수행하기 위해 사용합니다.
- `useEffect`의 첫번째 인자로 들어가는 함수는 mount 될 때 실행되고, 그 함수가 반환하는 값은 `cleanup 함수`로 unmount 될 때 실행됩니다.
- 두번째 인자로는 의존성을 갖는 변수들을 배열로 전달합니다.
  - `useEffect(() => {}, [])` : 컴포넌트가 처음으로 mount, unmount 될 때에만 실행됩니다.
  - `useEffect(() => {}, [...rest])` : `...rest`에 들어가는 의존성을 갖는 값들이 변경될 때 `update(unmount -> mount)`가 발생합니다.
  - `useEffect(() => {})` : 컴포넌트가 변경될 때마다 계속 실행됩니다. 부모가 변경되면 자식은 항상 리렌더링 되기 때문에 잦게 실행됩니다.(리액트 내부에서 잦게 동작하고, DOM은 해당 DOM만 변경된다.)

```jsx
import { useEffect } from "react";

export default function Component({ name }) {
  useEffect(() => {
    console.log("컴포넌트가 mount");

    return () => {
      console.log("컴포넌트가 unmount");
    };
  }, []);
  return <div>{name}</div>;
}
```
