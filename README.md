## Wishpoll-Web-View link

- https://wishpoll.io/

## U.C - 공용 개발 문서

- https://www.notion.so/U-C-3de4ed4e4c154ba098dd4e9d0dca2f13?pvs=4

## Github issue 사용 예제

- https://github.com/UC-WISH/Web-Front/issues/184

## 커밋 메세지 컨벤션

(예제)

- `feat: 퀘스트 isAnswered 기능 추가  `
- `fix: 퀘스트 isAnswered 기능 버그 해결  `
- `style: 퀘스트 디자인 레이아웃 display: none  `
- `rename: 퀘스트 결과 organism에서 template으로 업그레이드  `
- `remove: poll33 파일 삭제  `

| type             | 설명                                                             |
| ---------------- | ---------------------------------------------------------------- |
| feat             | **새로운 기능 추가**                                             |
| improve          | **기존 기능을 수정 한 경우 or 요구 사항이 변경되어 수정된 경우** |
| style            | **디자인 및 레이아웃 작업**                                      |
| fix              | **버그 수정**                                                    |
| build            | **관련 변경 사항 빌드**                                          |
| rename           | **파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우**           |
| remove           | **파일을 삭제하는 작업만 수행한 경우**                           |
| chore            | **짜잘한 청소 작업들**                                           |
| performance      | **성능을 향상시키는 코드 변경**                                  |
| docs             | **문서 수정**                                                    |
| refactor         | **코드 리팩터링**                                                |
| revert           | **되돌리기**                                                     |
| !BREAKING CHANGE | **urgent - 커다란 API 변경의 경우**                              |
| !HOTFIX          | **urgent - 치명적인 버그를 고쳐야 하는 경우**                    |

- chore: 코드를 개선하거나, 기존 코드를 유지 보수하거나, 테스트 및 문서 작성과 같은 여러가지 짜잘한 청소 작업

---

### 1.1. `npm start`- 프로젝트 서버 시작

- 안될시 설치부터 진행후 다시 시도 ==> `npm install`

### 1.2. `server.js 파일에서 Port 설정합니다`

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 1.3. `npm run build`

- AWS S3 배포 방식을 따라서 빌드후 빌드파일 업로드

---

### `* git config core.ignorecase false`

- git 파일 대소문자 구분 설정 -> 이후 push .

### \* 라이브러리 확인 ---------> library.md 확인

- 페이지에 못보던 오류가 생겼는데 패키지 문제라고 판단되시면, library.md 확인해주세요.

### 환경

```
백엔드 로컬 서버 환경에서 구현하는건 -> 어느방향을 바라보든 DB를 바라본다.

(1)
프런트가 base url ---> http://localhost:7300

* Nest JS command *
`yarn start` --->  라이브 DB를 본다. (git pull을 주기적으로 해줘야한다) - *get*
`yarn start:dev` --->  본인 로컬 상태 DB를 본다 - *create*

------------------------------------

(2)
프런트가 base url --->  http://43.200.187.166:7300
현재 배포된 환경: http://wishpoll-admin.s3-website.ap-northeast-2.amazonaws.com/

라이브 서버 환경에서 ---> 라이브 서버 DB를 본다.
```
