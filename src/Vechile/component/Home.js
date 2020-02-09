import React from 'react'
import '../satic/Vechile.scss'
import { withRouter } from 'react-router-dom'
import car from '../satic/img/car.jpg'
import bike from '../satic/img/bike.jpg'

class Home extends React.Component {
    state = {
        searchKey: '',
        vechileList: []
    }

    BookingVehicle = (plate) => {
        const {history} = this.props
        history.push('/booking/'+plate)
    }

    componentDidMount (){
       fetch("http://localhost:8080",{
           method:"GET"
       }).then(res=>res.json())
       .then(data=>{
           this.setState({
               vechileList:data
           })
       })

    }

    


    render () {
        let {vechileList, searchKey} = this.state
        console.log(vechileList,'vechile')

        return (

            <div className='container-fluid'>
                <div className='row '>
                    <div className="col-12">
                        <nav className="">
                            <div style={{fontSize: 50, textAlign: 'center', paddingTop:30}}>
                                Welcome to <b>Westminster</b> Rental Vehicle Booking System
                            </div>
                        </nav>
                    </div>

                    <div className="col-md-12 padding-top-30">
                        <div className="row">
                            <div className="col-md-6">
                                <select className="form-control" id="lang" >
                                    <option selected disabled value="">Select the Vehicle</option>
                                    <option value="Car">Car</option>
                                    <option value="Motorbike">Motrbike</option>
                                </select>
                                <p>{this.state.value}</p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <input className="col-md-10 offset-1 form-control" type="search"
                                           placeholder="Enter the Brand / Model" aria-label="Search"/>
                                    &nbsp; <i className="fa fa-search padding-top-10"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12" style={{top: 40}}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Vehicle</th>
                                <th scope="col">Registration</th>
                                <th scope="col">Price</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col">Colour</th>
                                {/* <th scope="col">Fuel</th> */}
                                <th scope="col">Transmision</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            {vechileList
                                .map((e, index) => {
                                    return (
                                        <tbody>
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>
                                                {e.vehicleType === 'Car' ? <img
                                                    src={car}
                                                    className="img-responsive "
                                                    width={90}
                                                    height={50}
                                                /> : <img
                                                    src={bike}
                                                    className="img-responsive "
                                                    width={90}
                                                    height={50}
                                                />}

                                            </td>
                                            <td>{e.plateNumber}</td>
                                            <td>{e.price  + " LKR"}</td>
                                            <td>{e.brand}</td>
                                            <td>{e.model}</td>
                                            <td>{e.colour}</td>
                                            {/* <td>{e.fuelType}</td> */}
                                            <td>{e.transmissionType}</td>
                                            <td>
                                                <button className="btn btn-primary btn-embossed"
                                                        onClick={()=>{
                                                            
                                                            this.BookingVehicle(e.plateNumber);}}>Reserve Now >
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>


                </div>
            </div>
        )
    }
}

export default withRouter(Home);

