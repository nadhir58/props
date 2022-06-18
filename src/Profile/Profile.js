import React from "react";
/* import PropTypes, { checkPropTypes } from 'prop-types' */
function Profile(props){
/* const {fullname,profession,bio} = alpha */
console.log()
    return(
        <div>
            <div> fullname : {props.fullname}</div> 
            <div> profession :{props.profession} </div>
            <div> bio :{props.bio} </div>
            <div> 
               {/*  <img src={children[0]}/> */}
               {props.children[0]}
            </div>
            <button onClick={props.data}> call function </button>
           
        </div>
       
    )

}
export default Profile;
/* Profile.defaultProps ={
    fullname : "ahmed radhi",
    profession : "web-master",
    bio :"Debra Carroll knows that successful students become successful adults. This is her 15th year at Edison Elementary School and her 10th year teaching fourth grade. So far, fourth grade is her favorite grade to teach! Mrs. Carroll was the 2011 Newell Unified School District Teacher of the Year, and received her National Board Certification in 2013. She loves science and majored in biology at Arizona State University, where she also earned her teaching credential and Master of Education degree. Mrs. Carroll is excited to begin the best year ever!"
}

Profile.prototype ={
    
 fullname : PropTypes.string,
 profession : PropTypes.string,
 bio : PropTypes.string,
 data : PropTypes.func

} */
