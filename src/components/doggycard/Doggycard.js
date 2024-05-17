import './Doggycard.css'

function Doggycard({
    doggyImage,
    doggyName,
    doggyModel,
    firstRegistration,
    distanceWalked,
    fuelType
}) {
    return (
        <div className='doggycard'>
            <div className='doggycard-header'>
                <img src={doggyImage}></img>
            </div>
            <div className='doggycard-name'>{doggyName}</div>
            <div className='doggycard-model'>{doggyModel}</div>
            <div className='doggycard-details'>First registration: {firstRegistration}</div>
            <div className='doggycard-details'>Distance walked: {distanceWalked}</div>
            <div className='doggycard-details'>Fuel type: {fuelType}</div>
            
        </div>
    )
}

export default Doggycard;