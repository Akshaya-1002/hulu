import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CloseIcon from '@mui/icons-material/Close';

function App() {

        useEffect(() => {
          const modal = document.querySelector('.modal');
          const loginBtn = document.querySelector('.login-btn');
          const closeBtn = document.querySelector('.close');
  
          const openModal = () => {
              modal.style.display = 'block';
          };
  
          const closeModal = () => {
              modal.style.display = 'none';
          };
  
          const outsideClick = (e) => {
              if (e.target === modal) {
                  closeModal();
              }
          };
  
          loginBtn.addEventListener('click', openModal);
          closeBtn.addEventListener('click', closeModal);
          window.addEventListener('click', outsideClick);
          return () => {
              loginBtn.removeEventListener('click', openModal);
              closeBtn.removeEventListener('click', closeModal);
              window.removeEventListener('click', outsideClick);
          };
      }, []);

  return (
    <div className='container'>

      <div className='container_1'>
        <div className='navbar'>
          <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="Logo" className='nav_logo'/>

          <header className="header">
          <nav>
            <ul>
                <li>
                    <button className="login-btn">Log In</button>
                </li>
            </ul>
          </nav>
        </header>
        <div className="modal">
          <div className="modal-box">
            <div className="modal-body">
                <h3>Log In</h3>
                <form>
                    <div className="form-control">
                        <label for="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label for="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className='sign_up'>
                        <Link to="/signup">LOG IN</Link>
                    </div><br/><br/>
                    <div className='note'>
                      <p>Email: akshaya@gmail.com</p>
                      <p>Password: 1111</p>
                    </div>
                </form>
            </div>
            <i className="close"><CloseIcon/></i>
          </div>
        </div>
        </div>

        {/* main center */}
        <div className='main_box'>
          <div className='box_left'>
            <p>DISNEY BUNDLE DUO BASIC</p>
            <img src="https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original" alt="box_left" />
            <h1>Both with ads, for <br /> $9.99/month.</h1><br />
            <button className='plan_one'>GET THEM BOTH</button>
          </div>
          <div className='box_right'>
            <p>DISNEY BUNDLE TRIO BASIC</p>
            <img src="https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png" alt="box_right" />
            <h1>All with ads, for <br /> $14.99/month.</h1><br />
            <button className='plan_two'>GET ALL THREE</button>
          </div>
        </div><br /><br />
        {/* <div className='sign_up'>
          <Link to="/signup">LOG IN FOR HULU ONLY</Link>
        </div> */}
        {/* <div className='view_more'>
          <p>VIEW MORE PLANS</p>
        </div><br />
        <div className='view_more_icon'>
          <a href='#view_more_icon'>
            <span className="material-symbols-outlined">
              south
            </span>
          </a>
        </div> */}
      </div>


      <div className='container_2'>
        <p className='line_1'>INCLUDED IN ALL PLANS</p>
        <h2 className='line_2'>All The TV You Love</h2>
        <p className='line_3'>Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu <br /> Originals, kids shows, and more.</p><br />
        <div className='cards'>
          <div className='card_1'>
            <h4>Past & Current Seasons</h4>
            <h2>TV Shows</h2>
          </div>
          <div className='card_2'>
            <h4>New & Classic</h4>
            <h2>Movies</h2>
          </div>
          <div className='card_3'>
            <h4>Groundbreaking</h4>
            <h2>Hulu Originals</h2>
          </div>
          <div className='card_4'>
            <h4>Add-on</h4>
            <h2>Premiums</h2>
          </div>
        </div>
        <div className='part_2'>
          <p className='line_1'>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</p>
          <h2 className='line_2'>Live TV Makes It Better</h2>
          <p className='line_3'>Get 95+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, <br/> and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV <br/> recordings for up to nine months and fast-forward through your DVR content. Access <br/> endless entertainment with Disney+ and live sports with ESPN+.
          </p>
        </div>
        <br />
      </div>

      <div className='container_3'>
          <div className='box_1'>
          <h1 className='heading_1'>Live Sports</h1>
          <p className='para_1'>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more. Includes top local and national sports networks like ABC, CBS Sports Network, ESPN, FOX, FS1, TNT, NFL Network and more.</p>
          <div className='live_sports_images'>
            <div className='imgs'>
                <img src="https://cnbl-cdn.bamgrid.com/assets/13aa152764ceb4047c7f902524efb09c2a56e75c95991d2eb708b97cb95c25fa/original" alt='live_sports_1'/>
            </div>
            <div className='imgs'>
                <img src="https://cnbl-cdn.bamgrid.com/assets/22943c5e9e0ee02501daa440ecbc2384e5e5255b6306a4100bb49bde19b1d6ca/original" alt='live_sports_2'/>
            </div>
            <div className='imgs'>
                <img src="https://cnbl-cdn.bamgrid.com/assets/1011985ada97696d9ac50c3ba59cfa50d0cebb41008519c5bbe0058f9c7fc079/original" alt='live_sports_3'/>
            </div>
            <div className='imgs'>
                <img src="https://cnbl-cdn.bamgrid.com/assets/1caca943330869aaf05bf9db4adfc269ac8879fe9cee6392eba96561522d0452/original" alt='live_sports_4'/>
            </div>
          </div>
          </div>
      </div>

      <div className='container_4'>
        <div className='col_1'>
            <p className='head_1'>BROWSE</p>
            <p>Streaming Library</p>
            <p>Live TV</p>
            <p>Live News</p>
            <p>Live Sports</p>
        </div>
        <div className='col_2'>
            <p>&nbsp;</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>Originals</p>
            <p>Networks</p>
            <p>Kids</p>
            <p>FX</p>
        </div>
        <div className='col_3'>
            <p>&nbsp;</p>
            <p>Max</p>
            <p>Cinemax</p>
            <p>Paramount+ with SHOWTIME</p>
            <p>STARZ</p>
        </div>

        <div className='col_4'>
            <p>&nbsp;</p>
            <p>Disney Bundle Trio Basic</p>
            <p>Disney Bundle Trio <br/> Premium</p>
            <p>Disney Bundle Duo Basic</p>
            <p>Student Discount</p>
        </div>

        <div className='col_5'>
            <p className='head_1'>HELP</p>
            <p>Account & Billing</p>
            <p>Plans & Pricing</p>
            <p>Supported Devices</p>
            <p>Accessibility</p>
        </div>

        <div className='col_6'>
            <p className='head_1'>ABOUT US</p>
            <p>Shop Hulu</p>
            <p>Press</p>
            <p>Jobs</p>
            <p>Contact</p>
            <p>Guides | What to Watch</p>
        </div>
      </div>

      <div className='container_5'>
        <hr/>
        <a href='https://www.facebook.com/hulu'>
            <img src="https://www.hulu.com/static/hitch/static/icons/facebook.svg" alt='fb'/>
        </a>
        <a href='https://twitter.com/hulu'>
            <img src="https://www.hulu.com/static/hitch/static/icons/twitter.svg" alt='tw'/>
        </a>
        <a href='https://www.youtube.com/channel/UCE5mQnNl8Q4H2qcv4ikaXeA'>
            <img src="	https://www.hulu.com/static/hitch/static/icons/youtube.svg" alt='yt'/>
        </a>
        <a href='https://www.instagram.com/hulu/'>
            <img src="https://www.hulu.com/static/hitch/static/icons/instagram.svg" alt='insta'/>
        </a>

        <div className='footer'>
          <span>© 2024 Hulu, LLC</span>
          <span>About Ads</span>
          <span>Subscriber Agreement</span>
          <span>Do Not Sell or Share My Personal Information</span>
          <span>Your US State Privacy Rights</span>
          <span>TV Parental Guidelines</span>
          <span>Sitemap</span>
        </div>
      </div>
    </div>
  );
  }

export default App;