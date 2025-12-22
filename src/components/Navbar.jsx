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
                <CartWigdet/>
            </nav>
    )
}

export default Navbar