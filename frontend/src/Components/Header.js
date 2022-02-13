function Header(){
    return(
        <nav className="max-w-2xl mx-auto text-center mt-4">
            <h1 className="font-logo text-4xl">
                <span className="text-gray-500">Pay</span><span className="p-1 bg-blue-400 text-white rounded ml-1 text-3xl">Linky</span>
            </h1>
            <p className="text-xs text-gray-400 ml-5 mt-1">✨ a UPI link generator for Web Mobiles ✨</p>
        </nav>
    );
}

export default Header