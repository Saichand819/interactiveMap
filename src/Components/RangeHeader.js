function RangerHeader({circleColors}){
    return(
        <div className="d-flex justify-content-around flex-wrap">
            {
                circleColors.map((eachColor,index)=>{
                    return(
                        <div className="d-flex align-items-center text-center" key={index}>
                            <div style={{height:"30px", width:"30px",borderRadius:"20px", backgroundColor: eachColor,margin:"10px"}}> 
                            </div>
                            <p style={{marginBottom:"0",marginLeft:"8px"}}>{index*200} - {index*200+200} units</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RangerHeader