import React from 'react'
import { withRouter } from 'react-router-dom'
import '../satic/Vechile.scss';
import image from '../satic/img/car.jpg'
import moment from 'moment';

class BookingRegestration extends React.Component {
    

    constructor(props){
        super(props)
        this.state = {
            vehicleReq: [],
            show:false,
            numberPlate:props.match.params.id,
            customerName:"",
            contactNumber:"",
            nicNumber:"",
            pickUpDate:"",
            dropDate:""
        

            
        }
       
    }

    

    handleChange = (event, refer) => {
        const { vehicleReq } = this.state
        vehicleReq[refer] = event.target.value
        this.setState({ vehicleReq })
    }

    show = () => {
        let {show} = this.state
        this.setState({show: !show});
        fetch("http://localhost:8080/booking",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    "numberPlate":this.state.numberPlate,
                    "customerName":this.state.customerName,
                    "contactNumber":this.state.contactNumber,
                    "nicNumber":this.state.nicNumber,
                    "pickUpDate":moment(this.state.pickUpDate).format('YYYY/MM/DD'), // Date format change
                    "dropDate":moment(this.state.dropDate).format('YYYY/MM/DD')
                    
                }
            )
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){
             prompt("Done");
        })
    }
    render () {
        let {show,vehicleReq,numberPlate,customerName,contactNumber,nicNumber,pickUpDate,dropDate} = this.state

        return (
            <div className='container-fluid'>
                <div className="row">

                    <div className="col-12">
                        <nav className="">
                            <div style={{fontSize: 50, textAlign: 'center', paddingTop:20}}>
                            <b>Westminster</b> Rental Vehicle
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-5" style={{top:150, marginLeft:30}}>
                        <img src={image}/>
                    </div>
                    <div className="col-md-6" style={{top:40, marginLeft:40}}>
                        <div className="card-view">

                            <h5 className="card-header text-center" style={{color:"#05147b"}}>
                                <strong>Vehicle Booking Form</strong>
                            </h5>

                            <div className="card-body padding-top-30">

                                <form className="text-left" style={{color: '#05147b'}}>

                                    <div className="padding-top-5">
                                        <label>Customer Name</label>
                                        <input type="text"  placeholder="Enter the customer name here....."
                                               className="form-control"
                                               value={this.state.customerName}
                                               onChange={(e)=>this.setState({
                                                   customerName:e.target.value
                                               })}/>
                                    </div>

                                    <div className="padding-top-5">
                                        <label>Contact Number</label>
                                        <input type="tel" placeholder="Enter the contact number here....."
                                               className="form-control"
                                               value={this.state.contactNumber}
                                               onChange={(e)=>this.setState({
                                                   contactNumber:e.target.value
                                               })}/>
                                    </div>

                                    <div className="padding-top-5">
                                        <label>NIC Number</label>
                                        <input type="id" placeholder="Enter the NIC number here....."
                                               className="form-control"
                                               value={this.state.nicNumber}
                                               onChange={(e)=>this.setState({
                                                   nicNumber:e.target.value
                                               })}/>
                                    </div>

                                    <div className="padding-top-5">
                                        <label>Pickup Date</label>
                                        <input type="date"
                                               className="form-control"
                                               value={this.state.pickUpDate}
                                               onChange={(e)=>this.setState({
                                                   pickUpDate:e.target.value
                                                   
                                               })}/>
                                    </div>

                                     <div className="padding-top-5">
                                         <label>Drop Date</label>
                                         <input type="date"
                                                className="form-control"
                                                value={this.state.dropDate}
                                               onChange={(e)=>this.setState({
                                                   dropDate:e.target.value
                                               })}/>
                                    </div>
                                    {
                                        !show &&
                                        <button
                                            className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                                            type="submit" onClick={this.show.bind(this)}>Conform
                                        </button>
                                    }

                                    {
                                        show &&
                                            <div style={{color:"green",top:40}}>
                                               Successfully Booked !!!..... 
                                            </div>
                                    }

                                </form>

                            </div>

                        </div>
                    </div>
                </div>

                {
                    show &&
                    
                    <div className="col-12" style={{paddingTop: 60}}>
                        <table className="table">
                            <thead >
                            <tr>
                                <th scope="col">Vehicle Number</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">NIC Number</th>
                                <th scope="col">Pickup Date</th>
                                <th scope="col">Drop Date</th>
                            </tr>
                            </thead>

                                        <tbody>
                                        <tr>
                                            <td>{numberPlate}</td>
                                            <td>{customerName}</td>
                                            <td>{contactNumber}</td>
                                            <td>{nicNumber}</td>
                                            <td>{pickUpDate}</td>
                                            <td>{dropDate}</td>
                                        </tr>
                                        </tbody>
                        </table>
                    </div>
                }

            </div>
        )
    }
}

export default withRouter(BookingRegestration);

