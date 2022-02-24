// Code EyesOnMe Component Here

function EyesOnMe(){
    return(
        <div>
            <button onBlur= {handleBlur} onFocus={handleFocus}>Eyes on me</button>
        </div>
    )
    function handleBlur(){
        console.log("Hey! Eyes on me!")
    }
    function handleFocus(){
        console.log("Good!")
    }
}

export default EyesOnMe;