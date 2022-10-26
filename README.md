# 원티드 프리온보딩 프론트엔드 과제

### 배포 주소
https://wanted-pre-onboarding-fe-7-dusky.vercel.app/

### 실행 방법
1. 레포지토리 클론 후

```
npm install 
```

2. 개발 환경 실행 방법
```
npm start
```

# 과제 구현 방식
## 폴더 구조
```
📦src
 ┣ 📂api // axios instanse를 만들어 사용했습니다 
 ┃ ┣ 📂core
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜main.js
 ┣ 📂components 
 ┃ ┣ 📜Input.jsx
 ┃ ┣ 📜LoginForm.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂hooks // useForm hook을 만들어 form 컴포넌트에 적용
 ┃ ┗ 📜useForm.js
 ┣ 📂layout
 ┃ ┗ 📜Layout.jsx
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂storage
 ┃ ┗ 📜localStorage.js
 ┣ 📂utils
 ┃ ┗ 📜formValidation.js
 ┣ 📜App.js
 ┣ 📜constant.js
 ┗ 📜index.js
```

## 컴포넌트 설계
### pages
- Home.js 
'/'
- Main.js
'/todo'
두 페이지로 분리했습니다. 

### layout
위의 두 페이지를 감싸기 위한 Layout.js를 만들었습니다. 

각 페이지 컴포넌트를 레이아웃으로 감쌈
```js

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact={true}
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/todo"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

```
### components

#### input
#### LoginForm
#### TodoList

## hooks
### useForm hook
```js
import { useEffect, useState } from 'react';

const useForm = ({ initialValues, onSignUp, onSignIn, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors(validate({ name, value, errors }));
  };

  useEffect(() => {
    setIsValidate(
      Object.values(errors).every((v) => v === '') &&
        Object.values(errors).length === Object.values(initialValues).length
    );
  }, [values, errors, initialValues]);

  const handleSignIn = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    onSignIn(values);
  };

  const handleSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    onSignUp(values);
  };

  return {
    values,
    errors,
    isLoading,
    isValidate,
    handleChange,
    handleSignIn,
    handleSignUp,
  };
};

export default useForm;
```

useForm Hook을 만들어서 signIn과 signUp 처리를 했습니다. 
그 결과 컴포넌트 단에서의 로직을 최소화할 수 있었습니다. 

### api
axios instance 사용 



### 로컬 스토리지
로컬 스토리지 get / set을 함수화 해서 api 함수 안에서 사용했습니다. 


## 핵심 구현 사항
1. Simple 인증 / 인가
2. Simple CRUD


## 커밋 컨밴션
```
feat : 기능 구현
refactor : 로직 개선 사항
style : 스타일
```


#### 평가 사항
- 코드의 가독성
    - formatting => eslint / prettier 사용
    - 불필요한 코드들 
    - 변수명
    - etc
- 컴포넌트가 잘 분리되었는가?
    - 컴포넌트를 물리적으로 분리하는 것 ⇒ 진정한 의미의 컴포넌트 분리가 아님
    - 컴포넌트를 논리적인 단위로 잘 분해한다음 용도에 맞게 설계하는 것
        - 이 컴포넌트는 어디에 사용되는가?
        - 이 컴포넌트의 역할과 책임은 무엇인가?
- 관심사가 잘 분리되었는가?
    - 반복되는 코드들이 적절한 단위로 추상화되고 분리되었는가?
    - 각 모듈(함수, 클래스 등)의 역할과 책임, 동작이 명확하게 드러나는가?
    - 각 모듈들은 재사용 가능한 형태인가?
- 프로젝트의 아키텍쳐는 어떻게 설계되었는가?
    - 모듈간의 의존성은 잘 설계되어있는가?
    - 외부의 변화에 유연하게 대응할 수 있게 설계되어있는가?

