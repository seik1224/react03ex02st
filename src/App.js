import "./App.css";
import LoadingBar from "./components/LoadingBar";
import Card from "./_views/Card";

const data = [
  {
    id: 1,
    profile: "Mario",
    title: "nintendo product no.1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    like: 0,
    comments: [],
  },
  {
    id: 2,
    profile: "Zelda",
    title: "nintendo product no.2",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    like: 0,
    comments: [],
  },
  {
    id: 3,
    profile: "Pokemon",
    title: "nintendo product no.3",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    like: 0,
    comments: [],
  },
];

function App() {
  return (
    <div className="flex">
      <header className="flex-none w-[280px]">
        <div className="fixed w-[280px] p-3 h-full border-r border-gray-300 border-solid flex flex-col justify-between ">
          <div>
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} className="App-logo w-[103px] m-3 mb-6" alt="logo" />
            <ul>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon01.svg`} alt="" />
                  <h4 className="pl-4">홈</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon02.svg`} alt="" />
                  <h4 className="pl-4">로고크기 103px</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon03.svg`} alt="" />
                  <h4 className="pl-4">너비값 280px</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon04.svg`} alt="" />
                  <h4 className="pl-4">모든패딩 12px</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon05.svg`} alt="" />
                  <h4 className="pl-4">호버시 241 245 249</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center relative" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon06.svg`} alt="" />
                  <span
                    className={`rounded-full absolute bg-[#ff3040] text-white h-[18px] leading-[18px] px-1.5 text-[11px] left-4 -top-1 opacity-0`}
                  >
                    0
                  </span>
                  <h4 className="pl-4">알림</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon07.svg`} alt="" />
                  <h4 className="pl-4">만들기</h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="p-3 hover:bg-slate-100 rounded-xl">
            <a className="flex items-center" href="/">
              <img src={`${process.env.PUBLIC_URL}/icon09.svg`} alt="" />
              <h4 className="pl-4">더 보기</h4>
            </a>
          </div>
        </div>
      </header>

      {/* 카드 */}
      <Card />

      {/* 로딩바 */}
      <LoadingBar />

      {/* 상세페이지 라우트 */}
    </div>
  );
}

export default App;
