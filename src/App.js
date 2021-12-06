import './App'
import Nav from "./Nav";
import Img from './images/navLogo.png'
import Main from './Main'
import imgMain from './images/main_03.png'
import imgMainRight1 from './images/main_06.png'
import imgMainRight2 from './images/main_09.png'
import imgMainRight3 from './images/main_11.png'
import imgMainRight4 from './images/main_14.png'

// const appStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   width: "1110px",
//   margin: "auto",
// };

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#!" className="logo">
            <img src={Img} alt="logo" />
          </a>
          <ul>
            <li>
              <Nav title="Кроссовки" />
              <Nav title="Кеды" />
              <Nav title="Футболки" />
              <Nav title="Шорты" />
              <Nav title="Майки" />
              <Nav title="Олимпийки" />
              <Nav title="Толстовки" />
            </li>
          </ul>
        </nav>

        <div className="title">
          <h1>Nike</h1>
          <p>Китайские nike от <span>Change IT academy</span></p>
        </div>
      </header>

      <main>
        <div className="product">
          <div className="product_left">
            <div className="left_img">
              <img src={imgMain} alt="png" />
            </div>
            <div class="left_info">
              {/* <h3>Кросовки <span>Nike Neoline</span></h3> */}
              <Main title="Кросовки" span="Nike Neoline" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit"/>
            </div>
          </div>
          <div className="product_right">
            <div className="right_box">
              <div className="box_img">
                <img src={imgMainRight1} alt="png" />
              </div>
              <div className="box_info">
                <Main mainTitle="Кроссовки Nike Sport" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
              </div>
            </div>
            <div className="right_box">
              <div className="box_img">
                <img src={imgMainRight2} alt="png" />
              </div>
              <div className="box_info">
                <Main mainTitle="Кроссовки Nike Sport" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
              </div>
            </div>
            <div className="right_box">
              <div className="box_img">
                <img src={imgMainRight3} alt="png" />
              </div>
              <div className="box_info">
                <Main mainTitle="Кроссовки Nike Sport" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
              </div>
            </div>
            <div className="right_box">
              <div className="box_img">
                <img src={imgMainRight4} alt="png" />
              </div>
              <div className="box_info">
                <Main mainTitle="Кроссовки Nike Sport" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <nav>
          <a href="#!" className="logo">
            <img src={Img} alt="logo" />
          </a>
          <ul>
            <li>
              <Nav title="Кроссовки" />
              <Nav title="Кеды" />
              <Nav title="Футболки" />
              <Nav title="Шорты" />
              <Nav title="Майки" />
              <Nav title="Олимпийки" />
              <Nav title="Толстовки" />
            </li>
          </ul>
        </nav>


<p>Developped by Saidkarimov <span className="icon">😁</span> &copy;</p>

      </footer>
    </>
  );
}

export default App;


// <h1 style={{textAlign: 'center'}}>The best Books</h1>
/* <hr/>
<div className="Books" style={appStyle}>

  <Book title="Git" year="2018" />
  <Book title="Maksimus yoxud askardan chiqqan imperator" year="2010" />
  <Book title="Million dollarlik xatolar" year="2018" />
</div> */