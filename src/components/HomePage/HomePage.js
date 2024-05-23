import './HomePage.css';
import TopImages from '../TopImages/TopImages.js';
import LookingFor from '../LookingFor/LookingFor.js';
import ShowMore from '../ShowMore/ShowMore.js';
import HomeBottom from '../HomeBottom/HomeBottom.js';
import ContactForm from '../contact/ContactForm.js';

function HomePage() {
    return (
        <div className="Home">
            <TopImages />
            <LookingFor />
            <ShowMore />
            <HomeBottom />
            <ContactForm />
        </div>
    )
}

export default HomePage;