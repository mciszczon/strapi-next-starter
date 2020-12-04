import sass from './Footer.module.scss'

const Footer = () => (
  <footer className={sass.Footer}>
    Copyright &copy; {new Date().getFullYear()}
  </footer>
)

export default Footer
