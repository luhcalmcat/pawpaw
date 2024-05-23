import './Banner.css'
import dog from '../../images/dog.png'
import dog2 from '../../images/dog2.jpg'
import dog3 from '../../images/dog3.png'
import dogs from '../../images/dogs.jpg'
import PuppyComment from '../puppy-comment/PuppyComment'


function Banner() {

    return (
        <div className='banner-wrapper'>
            <PuppyComment 
                title={"Life good"}
                paragraph={"Lots of food, lots of walkses and lots of food. After I finish paw school I might get good job to repay my hoomans.Then I give them treats... Until then I just cute"}
                name={"Wojti"}
                image={dog}
            />
        </div>
    )

}

export default Banner;