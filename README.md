1. JSX 문법이란 무엇일까요?

- JSX는 자바스크립트와 HTML을 동시에 사용할 수 있꼬, HTML에 자바스크립트의 변수들을 바로 사용할 수 있는 일종의 템플릿 언어입니다.

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요?

- useState 훅을 사용하였습니다.

3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요?

- React의 컴포넌트 상태를 업데이트하고, 이를 다른 하위 컴포넌트로 전달하여 상태 공유를 구현했습니다.

4. 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면 하나만 설명해 주세요.

- React가 상태 변경을 탐지하고 컴포넌트를 다시 렌더링하도록 하고자, setTodolist 함수를 통해 상태를 업데이트할 때 todolist 배열을 변경하지 않고 새로운 배열을 생성하여 업데이트 하였습니다.

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해 보셨나요? 그렇다면 어떠한 이점이 있었나요?

- 단순히 한 파일 안에 위치한 코드를 분리해줌으로써 어떤 컴포넌트가 반복되는 지 직관적으로 파악하기 쉽도록 했고, jsx 파일 자체도 코드의 길이가 짧아져 컴포넌트 전달 흐름을 파악하기가 보다 용이해졌습니다.
