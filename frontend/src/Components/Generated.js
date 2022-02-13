import React,{useState} from "react";


function GeneratedPage({uid, setGeneratedUid}) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () =>{
        navigator.clipboard.writeText(process.env.REACT_APP_FRONTEND+uid);
        setCopied(true);
        setInterval(() => {
            //console.log("hh")
            setCopied(false);
        }, 3000);
        return "";
    }

    if(!uid){
        window.location.href="/"
    }
    return(
        <div className="p-2 mt-10 max-w-sm mx-auto  text-center ">
            <h1 className="text-gray-600 text-xl">🎉🎉Paylink Generated🎉🎉</h1>
            <div className="bg-gray-100 text-gray-100 text-blue-500 rounded-md p-2 text-xl">
                {process.env.REACT_APP_FRONTEND+uid}
            </div>
            {copied &&<span className="text-xs text-cyan-500">Copied to clipboard</span>}
            <button 
                className="bg-white text-blue-500 rounded w-full mt-3 px-2 py-1 border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={handleCopy}
            >
                Copy
            </button>
            <br />
            <button className="bg-green-400 mt-4 text-white p-1 rounded-md text-xs" onClick={()=>{setGeneratedUid(false)}}>Generate Another</button>
        </div>
    );
}

export default GeneratedPage