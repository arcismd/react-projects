import logo from './img/logo-sn.png'
import cart from './img/cart.svg'
import user from './img/user.svg'
import plus from './img/plus-icon.svg'
import sneaker from './img/sneakers/s-1.svg'

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src={logo} />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>
              Cele mai bune ghete
            </p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src={cart} />
            <span>1250 lei</span>
          </li>
          <li>
            <img width={18} height={18} src={user} />
          </li>
        </ul>
      </header>
        <div className="content">
        <h1>Toate ghetele</h1>
        <div className='sneakers'>
          <div className='card'>
            <img width={133} height={112} src={sneaker} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src={plus} alt='Plus'/>
                </button>
              </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src={sneaker} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src={plus} alt='Plus'/>
                </button>
              </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src={sneaker} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src={plus} alt='Plus'/>
                </button>
              </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src={sneaker} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src={plus} alt='Plus'/>
                </button>
              </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
