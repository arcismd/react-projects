import logo from './img/logo-sn.png'
import cart from './img/cart.svg'
import user from './img/user.svg'
import plus from './img/plus-icon.svg'
import sneaker from './img/sneakers/s-1.svg'
import sneakerOne from './img/sneakers/s-12.svg'
import sneakerTwo from './img/sneakers/s-2.svg'
import sneakerThree from './img/sneakers/s-3.svg'
import search from './img/search.svg'
import heartOff from './img/h-off.svg'
import removeOn from './img/btn-remove-active.svg'
import arrow from './img/arrow.svg'

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: 'none' }}>
        <div className='overlay'>
          <div className='drawer'>
            <h2>Cos <img src={removeOn} alt='Close' /></h2>
              <div className='items'>
              <div className='cartItem'>
              <img 
              className='cart-img' 
              width={70} 
              height={70} 
              src={sneaker} 
              />
              <div className='cart-item-img'>
                
              </div>
                <div>
                <p className='cart-text'>Pantofi sport pentru bărbați Nike</p>
                <b>3 999 lei</b>
                </div>
                <div>
                  <img className='remove-btn' src={removeOn} alt='Remove' />
                </div>
            </div>

            <div className='cartItem'>
              <img 
              className='cart-img' 
              width={70} 
              height={70} 
              src={sneakerOne} 
              />
              <div className='cart-item-img'>
                
              </div>
                <div>
                <p className='cart-text'>Pantofi sport pentru bărbați Nike</p>
                <b>3 999 lei</b>
                </div>
                <div>
                  <img className='remove-btn' src={removeOn} alt='Remove' />
                </div>
            </div>
              </div>
                <div className='general-total-block'>
                <ul className='total-block'>
                  <li className='items-flex'>
                    <span>Total:</span>
                      <div></div>
                        <b>
                          21 498 lei
                        </b>
                  </li>
                  <li className='items-flex'>
                    <span>TVA 5%:</span>
                      <div></div>
                        <b>
                          1074 lei
                        </b>
                  </li>
                </ul>
                <button className='btn'>Finiseaza cumparatura <img src={arrow} alt='Arrow' /></button>
                </div>
          </div>
        </div>
      </div>
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
          <div className='flex'>
          <h1>Toate ghetele</h1>
            <div className='search-block'>
              <img src={search} alt='Search' />
              <input placeholder='Cautare...' />
            </div>
          </div>
        <div className='sneakers'>
          <div className='card'>
              <div className='favourite'>
              <img src={heartOff} alt="Unliked" />
              </div>
            <img width={133} height={112} src={sneaker} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei</b>
                </div>
                  <img className='button' src={plus} alt='Plus'/>
              </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src={sneakerOne} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei</b>
                </div>
                <img className='button' src={plus} alt='Plus'/>
              </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src={sneakerTwo} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei</b>
                </div>
                <img className='button' src={plus} alt='Plus'/>
              </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src={sneakerThree} alt='Sneakers' />
            <h5>Pantofi sport pentru bărbați Nike Blazer Mid Suede</h5>
              <div className='cardBtn'>
                <div className='cardInfo'>
                  <span>Pret:</span>
                  <b>3 999 lei</b>
                </div>
                <img className='button' src={plus} alt='Plus'/>
              </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
