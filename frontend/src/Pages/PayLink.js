import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Paylink(){
    const params = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState("");

    const fetchLink = () =>{
        const server = process.env.REACT_APP_BACKEND;
        console.log(server+"api/link/"+params.id)
        fetch(server+"api/link/"+params.id,{
                method: 'GET',
            })
            .then(function (response) {
                return response.json();
            })
            .then((data)=>{
                console.log(data)
                if(data.messsage==="Not found"){
                    setLoading(false);
                    setError([true, "Paylink not found  😔"])
                }else{
                    setError([false,""])
                    setLoading(false);
                    setResult(data);
                }
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
            });
    }

    useEffect(()=>{
        setLoading(true);
        fetchLink();
    },[])

    const PayPage = ({name, upi, amt, desc, tr, tid}) =>{

        const deepLink = `upi://pay?pa=${upi}&pn=${name}&am=${amt}&cu=INR`
        // console.log(deepLink);
        // const upiLink =   `upi://pay?am=${amt}&cu=INR&pa=${upi}&pn=${name}`;
        const upiLink = deepLink;
        const encodedUpiLink = encodeURIComponent(upiLink);

        return (<>
        <div className="p-2 mt-10 max-w-2xl mx-auto">
            <div className="mb-4 px-5 bg-gray-100 rounded-md m-2">
                <div className="flex">
                    <div className="font-semibold text-md mt-4 text-gray-500">Pay To :</div>
                    <div className="mt-4 ml-4">
                        <h2 className="font-semibold text-lg text-gray-600">{name}</h2>
                        <span className="block text-xs text-blue-400">{upi}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold text-md text-gray-500">Description : </h2>
                    <p className="text-gray-500">
                        {desc}
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold text-md text-gray-500">Amount : <span className="text-xl text-blue-700 font-semibold">Rs. {amt}</span></h2>
                </div>
                <div className="mt-4 text-center text-xs">
                    <img className="m-auto w-20" src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodedUpiLink}&amp;size=50x50&amp;bgcolor=gray`} />
                    Scan and Pay
                </div>
                <div className="mt-10 text-center">
                    <a className="bg-blue-700 text-gray-100 p-2 rounded-md font-semibold" href={upiLink}>Pay with UPI ⚡</a>
                </div>
                <br /><br />
            </div>
        </div>
    </>)
    }

    if(!loading && error[0]===false){
        // console.log(result);
        return <PayPage 
                    name={result.name} 
                    upi={result.upiid}
                    amt={result.amount}
                    desc={result.desc}
                    tr={result.uid}
                    tid={result._id}
                />
    }
    if(error[0]===true){
        return(<>
        <div className="p-2 mt-10 max-w-2xl mx-auto">
            <h1 className="text-xl text-center">{error[1]}</h1>
        </div>
        </>)
    }

    return(<>
        <div className="p-2 mt-10 max-w-2xl mx-auto">
            <h1 className="text-xl">⌛ Loading...</h1>
        </div>
        </>)
    // return (<>
    //     <div className="p-2 mt-10 max-w-2xl mx-auto">
    //         <div className="mb-4 px-5 bg-gray-100 rounded-md m-2">
    //             <div className="flex">
    //                 <div className="font-semibold text-md mt-4 text-gray-500">Pay To :</div>
    //                 <div className="mt-4 ml-4">
    //                     <h2 className="font-semibold text-lg text-gray-600">Sahil Kumar Jena</h2>
    //                     <span className="block text-xs text-blue-400">8178812482@axl</span>
    //                 </div>
    //             </div>
    //             <div className="mt-4">
    //                 <h2 className="font-semibold text-md text-gray-500">Description : </h2>
    //                 <p className="text-gray-500">
    //                     On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
    //                 </p>
    //             </div>
    //             <div className="mt-4">
    //                 <h2 className="font-semibold text-md text-gray-500">Amount : <span className="text-xl text-blue-700 font-semibold">Rs. 2000</span></h2>
    //             </div>
    //             <div className="mt-4 text-center text-xs">
    //                 <img className="m-auto" src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fgithub.io&amp;size=100x100&amp;bgcolor=gray" />
    //                 Scan and Pay
    //             </div>
    //             <div className="mt-10 text-center">
    //                 <a className="bg-blue-700 text-gray-100 p-2 rounded-md font-semibold" href="">Pay with UPI ⚡</a>
    //             </div>
    //             <br /><br />
    //         </div>
    //     </div>
    // </>)
}

export default Paylink;
