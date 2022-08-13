export default function Card(props){
    return(
        <div className="card">
            
             <h3  style={{marginLeft:20}} >CITY:{props.city}</h3>
            <p  style={{marginLeft:20}}>SPECIALITY:{props.special}</p>
           {props.img  && <img className="cardimg" src={props.img} alt="none"></img>}
           {props.visit===0 && <div className="visit">ALLOWED</div>}
           {props.visit===1 && <div className="nvisit">NOT-ALLOWED</div>}
           
        </div>
    )
}