import './PuppyComment.css'
import dog from '../../images/dog2.jpg'


function PuppyComment({
    title,
    paragraph,
    name,
    image
}) {
    return (
        <div className='puppy-comment-wrapper'>
            <div className='puppy-comment-text-wrapper'>
                <span className='puppy-comment-title'>Life good</span>
                <span className='puppy-comment-paragraph'>
                    Lots of food, lots of walkses and lots of food.
                    After I finish paw school I might get good job to repay my hoomans.
                    Then I give them treats...
                    Until then I just cute
                </span>
                <span className='puppy-comment-name'>Wojti</span>
            </div>
            <img className='puppy-comment-image' src={dog} />
        </div>
    )
}

export default PuppyComment;                  