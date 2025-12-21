//import css
import '../css/Navbar.css'
import logoAura from '../assets/img/logo.jpeg'

//import img en SRC
import CartWigdet from './CartWidget'

const Navbar =()=>{
console.log('Navbar')
    return(
            <nav className='nav-container'>
              <a className='anchor-nav' href="">
                    <img src={logoAura} alt='logo' /> 
                </a>
                <a className='anchor-nav' href="">Velas</a>
                <a className='anchor-nav' href="">Sprays</a>
                <a className='anchor-nav' href="">Jabones</a>
                <a className='anchor-nav' href="">Piedras</a>
 <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Velas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Sprays</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Jabones</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Piedras</a>
  </li>
</ul>
                <CartWigdet/>
            </nav>
    )
}

export default Navbar