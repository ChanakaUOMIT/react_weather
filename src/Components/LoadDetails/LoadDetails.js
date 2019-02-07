import React from "react";
const Api_Key = "3472f85c5a93466aea8a40db53de8a9b";

const List=[
    {
      "CityCode":"1248991",
      "CityName":"Colombo",
      "Temp":"33.0",
      "Status":"Clouds"
    }
    ,
    {
      "CityCode":"1850147",
      "CityName":"Tokyo",
      "Temp":"8.6",
      "Status":"Clear"
    },
    {
      "CityCode":"2644210",
      "CityName":"Liverpool",
      "Temp":"16.5",
      "Status":"Rain"
    },
    {
      "CityCode":"2988507",
      "CityName":"Paris",
      "Temp":"22.4",
      "Status":"Clear"
    },
    {
      "CityCode":"2147714",
      "CityName":"Sydney",
      "Temp":"27.3",
      "Status":"Rain"
    },
    {
      "CityCode":"4930956",
      "CityName":"Boston",
      "Temp":"4.2",
      "Status":"Mist"
    },
    {
      "CityCode":"1796236",
      "CityName":"Shanghai",
      "Temp":"10.1",
      "Status":"Clouds"
    },
    {
      "CityCode":"3143244",
      "CityName":"Oslo",
      "Temp":"-3.9",
      "Status":"Clear"
    }
  ]

class LoadDetails extends React.Component {
//     constructor(props){
//         super(props);

//         // this.state={
//         //     // formValid:false,
//         //     studentData:null,
//         //     formValid:true,
//         //     validEmail:false,
//         //     // validEmail:true,
//         //     emailAddress:'',
//         //     password:'',
//         //     validPassword:false,
//         //     // validPassword:true,
//         //     loadingVisible:false
//         // }
//         this.datahandler=this.datahandler.bind(this);

//         // this.setUser_details=this.setUser_details.bind(this);
// //ddsd

//     } 

    // renderContent(){
    //     // List.map(data => {<div>{data.CityName}</div>})
    // }

    // state = {

    //     data: undefined,
        
    //   }

    async renderContent(e) {
       console.log("Click");
       List.map(data => {
            // <div>{data.CityName}</div>
            console.log(data.CityName)

            let city = data.CityName;
    // const country = e.target.elements.country.value;
    e.preventDefault();   
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    // let api_call =  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);

    // let response =  api_call.json();

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`)
    .then(res => res.json())
    // .then(resJson=> this.dataHandler(resJson))
    .then((responseJson) => {
            console.log(responseJson);
            // this.setState({
            //     data:responseJson
            // })
            // console.log("Description in state "+this.state.data);

            console.log("Description "+responseJson.weather[0].description);
            console.log(responseJson.main.temp);
            console.log(responseJson.id);
            console.log(responseJson.name);

            
           })
        })
      }

      async dataHandler(data){
          console.log("I am in dataHandler")
          console.log(data)
      }
    

    render() {
     

        console.log(List)
        

        return (

            <div>

                <h1>LoadDetails</h1>
                {/* {this.renderContent()} */}

                <button onClick={this.renderContent}>
                    Activate Lasers
                </button>
            </div>
        )
    }
}

export default LoadDetails;