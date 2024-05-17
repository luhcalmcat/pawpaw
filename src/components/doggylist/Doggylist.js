import './Doggylist.css'
import doggyImage from '../../foto/doggy1 1.png'
import doggyImage2 from '../../foto/doggy2 1.png'
import doggyImage3 from '../../foto/doggy3 1.png'
import doggyImage4 from '../../foto/doggy4 2.png'

import Doggycard from '../doggycard/Doggycard'

function Doggylist() {
    return (
        <div className='doggylist'>
            <Doggycard
                doggyImage={doggyImage}
                doggyName={'Coco'}
                doggyModel={'A3 Sportback 2.0 TDI'}
                firstRegistration={'03/2020'}
                distanceWalked={'1000km'}
                fuelType={'Treats'}
            />
            <Doggycard
                doggyImage={doggyImage2}
                doggyName={'Jumbo'}
                doggyModel={'A4 B5 1.6'}
                firstRegistration={'10/2023'} 
                distanceWalked={'2000km'}
                fuelType={'Meat'}
            />
            <Doggycard
                doggyImage={doggyImage3}
                doggyName={'Dudek'}
                doggyModel={'VW Polo 1.4'}
                firstRegistration={'04/1872'}
                distanceWalked={'650200km'}
                fuelType={'Vegan'}
            />

            <Doggycard
                doggyImage={doggyImage4}
                doggyName={'Wojti'}
                doggyModel={'A7 Slowback 1.9 TDI'}
                firstRegistration={'06/2024'}
                distanceWalked={'5000km'}
                fuelType={'Potato'}
            />
        </div>
    )
}

export default Doggylist;