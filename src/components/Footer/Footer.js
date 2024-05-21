import './Footer.css';
import ReactLogo from '../../images/ReactLogo.png';

function Footer() {
    return (
        <div className='Stopka'>
            <div className='Copyright'>
                © 2022 PawPaw pawdation
            </div>
            <div className='Zasilane'>
                <p id='ZasilanePrzez'>Powered by</p>
                <img src={ReactLogo} alt='logo' />
            </div>
        </div>
    )
}

export default Footer;