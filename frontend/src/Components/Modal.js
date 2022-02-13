import React,{useState} from "react";

export default function Modal({invokeModal, setInvokeModal}) {
    return (
        <>
            
            {invokeModal ? (
                <>
                <div className="modal opacity-1 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                        <div className="modal-overlay absolute w-full h-full bg-white opacity-95" /> 
                        <div className="modal-container fixed w-full h-full z-50 overflow-y-auto ">
                            
                            <div className="modal-content container mx-auto h-auto text-left p-4">
                                <div className="flex justify-between items-center pb-2">
                                <p className="text-2xl font-bold">Full Screen Modal!</p>
                                </div>
                                <p>Modal content can go here</p>
                                <div className="flex justify-end pt-2">
                                {/* <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
                                <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button> */}
                                </div>
                                <button onClick={()=>{console.log("Close")}}>Close</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            </>
        );
}
