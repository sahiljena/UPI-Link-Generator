import React,{useState} from "react";
import GeneratedPage from "../Components/Generated";
function PayForm(){

    const [loading, setLoading] = useState(false);

    const [genratedUid, setGeneratedUid] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [upi, setUpi] = useState("");
    const [amt, setAmt] = useState("");

    const [error, setError] = useState(false);

    const [nameError, setNameError] = useState([false,'']);
    const [descError, setDescError] = useState([false,'']);
    const [upiError, setUpiError] = useState([false,'']);
    const [amtError, setAmtError] = useState([false,'']);

    //console.log(process.env.REACT_APP_MSG);

    const GenerateLink = async() =>{
        const server = process.env.REACT_APP_BACKEND;
        fetch(server+"api/generate-link",{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    upiid:upi,
                    name:name,
                    amount:amt,
                    desc:description,
                })
            })
            .then(function (response) {
                setLoading(false);
                return response.json();
            })
            .then((data)=>{
                if(data.success===true){
                    setGeneratedUid(data.uid);
                }else{
                    setGeneratedUid("");
                    setError([true, "Something went wron while generating the link  😔"])
                }
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
            });
    }

    const handleDescriptionChange = (event) =>{
        if(description.length<120){
            setDescription(event.target.value);
            setDescError([false,""])
        }
        else{
            var t = event.target.value;
            setDescription(t.slice(0, -1));
            setDescError([true,"description can be only be upto 120 characters long."]);
        }
    }
    
    const validateName = (namee) =>{
        if(namee===""){
            setNameError([true,"name is required."])
            return false;
        }
        if(namee.length<20){
            if(/^[A-Za-z\s]+$/.test(namee)){
                setNameError([false,""])
                return true;
            }else{
                setNameError([true,"enter a valid name, without any special characters."])
                return false;
            }
        }else{
            setNameError([true,"name can be only upto 20 characters."]);
            return false
        }
    }

    const validateDescription = (descri) => {
        if(descri.length>0){
            setDescError([false,""]);
            return true;
        }else{
            setDescError([true,"description is required."]);
            return false;
        }
    }

    const validateUpi = (id) =>{
        const isValid = /[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}/.test(id);
        if(!isValid){
            setUpiError([true,"please enter a valid upi."]);
        }else{
            setUpiError([false,""]);
        }
        return isValid;
    }

    const validateAmount = (amount) =>{
        var val = parseInt(amount);
        const isValid = new RegExp("[0-9]").test(val);
        if(isValid){
            setAmtError([false,""])
            return true
        }
        else{
            setAmtError([true,"Amount can only contain numeric value."])
            return false
        }
    }

    const ErrorMessage = (props) =>{
        return(
            <div className="p-2 text-xs text-red-400">
                {props.message}
            </div>
        );
        
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if(validateName(name) && validateDescription(description) && validateUpi(upi)  && validateAmount(amt)){
            console.log("Good to go.");
            setLoading(true);
            GenerateLink();
            return true;
        }

    }

    if(genratedUid){
        return <GeneratedPage uid={genratedUid} setGeneratedUid={setGeneratedUid} />
    }

    return(
        <>
        <div class="max-w-2xl mx-auto">
        <form className="mt-10 px-4 max-w-xl mx-auto" onSubmit={handleFormSubmit}>
            {error[0] && <div className="p-2 bg-red-400 rounded-md mb-2">{error[1]}</div>}
            <div className="mb-4">
                <label className="block text-gray-500 text-base font-semibold mb-2" for="name">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        placeholder="Name you would like on the payment link page."
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                />
                {nameError[0] &&<ErrorMessage message={nameError[1]}/>}
            </div>
            <div class="mb-4">
                <label class="block text-gray-500 text-base font-semibold mb-2">
                    Description
                </label>
                <textarea 
                    class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    rows="5" 
                    placeholder="You can add deatils, purpose etc."
                    value={description}
                    onChange={handleDescriptionChange}
                    // onKeyDown={handleBackSpace}
                >
                </textarea>
                <span className="text-xs text-gray-400">{description.length}/120</span>
                {descError[0] &&<ErrorMessage message={descError[1]}/>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-500 text-base font-semibold mb-2" for="name">
                    UPI ID
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        placeholder="UPI ID on which you would like to recieve the payment."
                        value={upi}
                        onChange={(e)=>{setUpi(e.target.value)}}
                />
                {upiError[0] &&<ErrorMessage message={upiError[1]}/>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-500 text-base font-semibold mb-2" for="name">
                    Amount 
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" 
                        placeholder="Amount which you would recieve"
                        value={amt}
                        onChange={(e)=>{setAmt(e.target.value)}}
                />
                {amtError[0] &&<ErrorMessage message={amtError[1]}/>}
            </div>
            <div className="mb-4 text-center">
                <button 
                    type="submit" 
                    className={`mt-5 text-white rounded p-2 text-base${loading?' bg-blue-200':' bg-blue-500'}`} >
                        {loading?"Generating...🚀":"Generate Link 🚀"}
                </button>
            </div>
        </form>
        </div>
        </>
    );
}

export default PayForm;