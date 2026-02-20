import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
return (
<footer style={{
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#fff8f4',
      borderTop: '1px solid rgba(255, 177, 125, 0.3)',
      textAlign: 'center'
    }}>
<p style={{ color: '#888', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Seguinos en Instagram</p>
<a href="https://www.instagram.com/miaurabonita/" target="_blank"  rel="noreferrer" style={{ color: 'rgb(255, 177, 125)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
<FaInstagram size={20}/>@miaurabonita</a>
<p style={{ color: '#bbb', fontSize: '0.8rem', marginTop: '1rem', marginBottom: 0 }}>© 2025 Mi Aura Bonita — Todos los derechos reservados</p>
</footer>
)
}

export default Footer