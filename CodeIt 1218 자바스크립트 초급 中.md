# CodeIt

**Ctrl + Shift + N**

- 목차
    - 프로그래밍 오버뷰 16
    - 자바스크립트 초급 17
    - html/css 19
    - 자바스크립트 중급 23
    - 유닉스 커맨드 24
    - 리액트 31
    - 백엔드 4
        - node
        - express
    - SQL 데이터베이스 8
    - Git 9
    
- 프로그래밍 오버뷰
    - 서버, 클라, db
        - 서버
            - ex) 클라이언트가 좋아요 누르면 좋아요를 db에 넣어줌, 클라이언트가 복잡한 연산을 할 때 클라 컴에서 하기 버거운 경우 서버가 대신 해주는, 서버가 스케줄에 맞게 작업을 예약하는 경우 (정기 결제) 역할 등
        - 클라이언트 - 이 코드도 내 컴에 있는게 아닌 ip 주소로 요청하면 서버가 주는 것, 그걸 브라우저가 해석해서 띄워주는 것임
            - html
            - css
            - js - 재생버튼, 자막버튼 시 누르면 변화되는 과정
        - 데이터베이스
            - 서버안에 존재하는 것 (유저 모두가 공유하는)
    
    - 구현방법
        
        ![spotify 세부 구현 내용 예시](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled.png)
        
        spotify 세부 구현 내용 예시
        
        - 라이브러리, 프레임워크 - 남이 써둔 코드
    
    - 분야
        - 웹
            - 컴, 폰에서 모두 가능
            - 아직 수요 가장 큼
            - 복잡해질수록
                - 리액트, 앵귤러, 뷰
            - api 개발 - 두 프로그램 소통하게 해주는 것, 클라와 서버가 소통하게 해주는 역할
                - 자바 파이썬 코틀린 php 루비 js
            - 데이터베이스
                - sql - 규칙엄격, 안정적
                - nosql - 유연 간편 - 프론트면 이걸로 가볍게 경험 ㄱ
        - 모바일
            - 클라이언트 = 애플리케이션
            - 애플 - 스위프트
            - 안드로이드 - 코틀린
            - 따로 만든다는 것이 까다로움
                - 크로스 플랫폼 → 리액트 네이티브 (리액트를 발전시켜서 나온 것임, 웹의 것을 재활용)
                - 플러터 (구글) - dart라는 언어임
            - 베스트?
                - 스위프트 코틀린이 모바일 최적화
                - 리액트네이티브 플러터 - 높은 성능 필요x 시, 개발 비용 적음,
                    - 리액트 - js 리액트 안다면
                    - 플러터 - 필요한 것만 배워서 빠르게 하고싶다면
        - 데이터
            - 데이터 엔지니어
                
                많은 양의 데이터 효과적 처리
                
                db 빅데이터 특화
                
                백엔드가 대체하는 경우도.
                
                대형 회사에서 존재, 준비단계 해주는 거임
                
            - **데이터 애널리스트**
                
                활용해서  직관적분석
                
                sql로 데이터 추출, 파이썬 분석
                
                인사이트 팀원들에게 전달
                
            - **데이터 사이언티스트**
                
                머신러닝 이용, 미래 예측
                
                파이썬
                
                머신 러닝을 서비스에 도입 시킬 방법 고민
                
            - 머러 엔지니어
                
                백엔드가 맡기도함
                
                머러 알고리즘을 서비스에 녹여내는
                
            - 머신러닝 리서처
                
                새 머러 알고리즘 찾고 기존 알고리즘 개선
                
                수학, 통계 등 석박사 학위
                
        - 게임
            - 유니티, 언리얼엔진
        - 블록체인
            
            비트코인, 쏠라나 등
            
            논란이 많음
            
            탈중앙화
            
            블록체인 엔지니어 - 블록체인 위 올라가는 앱을 만드는
            
            - 이더리움, 솔리디티 배워야
        - 임베디드 시스템 - c언어 = iOT
        - 운영체제 - 시스템 프로그래밍
        - vr ar
    
    - 분야 고민
        
        일단 웹 or 데이터
        
        **06 - 데이터, 백엔드, 프론트에 대한 전반적인 가이드!**
        
    - 요즘 파이썬 - 비개발자여도 영향
        - 이젠 데이터를 기반으로 의사결정하는 시대! - 파이썬 이용
        - 업무 자동화 - 엑셀 취합, 정리, 전송
        - 협업
        - pm - 컴 전공 이후 2번째로 가장 많이 하는 직업
    
    - 어떻게 해야 좋은 코드?
    - 객체지향 (**기능과 데이터를 하나로 묶은** 작은 단위)
        - 데이터나 기능에 변화가 생겨도 관련 객체만 변경
        - 더 의미있는 단위로 나뉘기 때문에 이해 수월, 재사용 수월
        - 전체가 완성되지 않아도 일부 기능만 사용가능 - 테스트 유리
        
        하지만 잘 나누고 설계 어려우므로 혼자 바로 만들 수 있거나 데이터 소규모 등은 top down으로 빠른 과정, 빠른 컴파일 속도의 것 만들면 됨
        
        ![Untitled](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled%201.png)
        
        ![Untitled](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled%202.png)
        
- 자바스크립트 초급
    - 자바스크립트 유튜브 내용 핵심
        
        변수를 선언할때는 
        
        - 변하지 않는 값은 const
        - 변할 수 있는 값은 let으로 선언
        
        ---
        
        **const message3 = `My name is ${name}`;
        const message4 = `나는 ${30+1}살 입니다.`;**
        
        ---
        
        **console.log(typeof 3);**
        
        ---
        
        숫자 + 문자열 = 문자열로 변환된다
        
        ---
        
        alert(prompt()) - 창으로 알려준다, 메세지를 보여준다
        
        prompt - 입력받을때 사용
        
        confirm - 사용자에게 확인이나 취소 확인할때
        
        ---
        
        String() → 문자형으로 변환
        
        Number() → 숫자형으로 변환
        
        Number("1234"), 1234
        Number("124adsf"), nan
        Number(true), 1
        
        Boolean(0),
        Boolean(""),
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN), - 빼고 전부 true
        
        String(3),
        String(true),
        String(null), - 그대로 찍힘 “null”
        
        ---
        
        - 어떤값이 들어와도 5 이상 들어오면 안될때 %5
        
        ---
        
        숫자형 문자형 비교했을떄 같게 나올때도 있대
        
        - === 할때 type까지 비교한다
        
        ---
        
        반복문에서는
        
        ```jsx
        for(let i =0;i<10;i++)
        ```
        
        ---
        
        ![Untitled](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled%203.png)
        
        ---
        
        ```jsx
        function sayHello(name = 'friend'){
        let msg = `Hello, ${name}`
        ```
        
        ---
        
        ```jsx
        function sayHello(name){
        	console.log(error)
        }
        
        let sayHello = function (name) {
        }
        
        let sayHello = () => {
        }
        ```
        
        ---
        
        - 함수 표현식
            
            함수선언문 : 어디서든 호출 가능 
            
            - 아래로 내려가면서 읽는 언어인 인터프리터이다
            
            ![Untitled](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled%204.png)
            
            어떻게 코드가 실행될수 있었을까?
            
            - 호이스팅
            
            초기 모든 함수 선언문 찾아서 모임을만든다
            
            ![Untitled](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled%205.png)
            
            함수 표현식은 코드에 도달하면 생성이 된다 
            
            ![Untitled](CodeIt%205a0b47877f96457bb8b3f20125cfc11f/Untitled%206.png)
            
            뭐가 더 좋을까?
            
            함수 선언문 쓰는게 더 자유롭다
            
            화살표 함수
            
            ```jsx
            //함수 표현식
            showError();
            
            let showError = function(){
              console.log('error');
            }
            
            함수 표현식이기 때문에 실행이 안됨
            ------------------------------------------
            //함수 선언문
            showError();
            
            function showError(){
              console.log('error');
            }
            --------------------------------------
            //화살표 함수
            let showError = () =>{
              console.log('error');
            }
            
            showError();
            ```
            
            ```jsx
            const sayHello = function(name){
              const msg = `Hello, ${name}`;
              console.log(msg);
            };
            
            sayHello("euisung");
            
            //화살표함수
            const sayHello = (name) => {
              const msg = `Hello, ${name}`;
              console.log(msg);
            };
            
            sayHello("euisung");
            
            //function을 지우고 매개변수 뒤에 화살표를 그려주면 끝 
            ```
            
            ```jsx
            const add = function(num1,num2){
              const result = num1 +num2 ;
              return result;
            };
            
            console.log(add(1,2));
            
            const add = (num1,num2) =>{
              return result = num1 +num2 ;
            };
            
            console.log(add(1,2));
            
            const add = (num1,num2) =>(num1 +num2) ;
            console.log(add(1,2));
            
            ```
            
        
        ---
        
        - 객체
        
        ```jsx
        const superman = {
           name : 'clark',
           age : 30,
        }
        
        //추가, 접근도 이렇게 2가지 방식으로.
        superman.hairColor = 'black';
        superman['hobby'] = 'football';
        //삭제
        delete superman.age;
        ```
        
        ---
        
        ```jsx
        function makeObject(name,age){
          return {
            name : name,
            age : age,
            hobby : 'football'
          }
        }
        
        const Mike = makeObject('Mike',30);
        ```
        
        ```jsx
        console.log('birthday' in Mike); //false
        -----------------------------
        //key가 없으면 무조건 true 나오니까 조건 추가 해주는 예시
        function isAdult(user){
          if(!('age' in user) || user.age < 20){
            return false;
          }
            return true;
        }
        --------------------------
        **//a in Mike 면 Mike의 모든 key가 a에 들어감**
        for(key in Mike){ 
          console.log(Mike[key]) //value 값이 나옴
        }
        ```
        
        ---
        
        - 객체 내 method
        
        ```jsx
        let boy = {
          name: "Mike",
          showName : function(){
            console.log(boy.name)
        		console.log(this.name) //boy보단 이게 좋음
        		console.log('hello my name is ${this.name}') //동일한듯
          }
        };
        
        boy.showName();
        
        let man = boy;
        man.name = "tom"
        man.showName() 
        		//이 때를 위해 boy.name으로 한정짓는 게 아니라 this.name이 좋음
        ```
        
        → 객체 만들땐
        
        - this를 사용하고
        - 화살표 메소드는 사용하지말자
            - 화살표 함수는 일반 함수와는 달리 자신만의 this를 갖지 않는다
        
        ---
        
        - 배열
        
        ```jsx
        let days = ["mon","tue","wed"];
        days[1]='화요일'
        
        days.push('thus');
        days.unshift("sun");
        console.log(days)
        
        ["sun","mon","화요일","wed","thus"]
        
        //shift 와 unshift는 첫번째 배열요소 접근
        ```
        
        ```jsx
        for(let index = 0; index<days.length; index++)
        {
        	console.log(days[index]);
        }
        
        for(let day of days)
        {
        	console.log(day);
        }
        ```
        
        - of를 사용
        
        ---
        
        - fetch
        
        `fetch()` 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.
        
        ```jsx
        fetch(url, options)
          .then((response) => console.log("response:", response))
          .catch((error) => console.log("error:", error));
        ```
        
        ---
        
    
    - 추상화
        - 원활한 소통방식 , 꼭 필요한 핵심, 구체적 정보 숨기고
        - 지도
    - 5**2는 거듭제곱 = 25
        
        거듭제곱이 곱셈보다 우선순위 높음
        
    - 백틱` 의 기능
        
        `이 안에 여러 " ' 가 존재할 때 \를 앞에 쓰는 대신 백틱으로 감싸서 가독성을 높이는 방법도 있다`
        
    - 
    
- 3
- 4
- 5
- 6
