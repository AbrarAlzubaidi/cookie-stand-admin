import next from "next"
import Link from 'next/link'

const OverView=()=>{
    return(
        <div className="text-center flex justify-center mt-80 ">
            <Link href="/">
                <a className=" text-4xl text-cyan-50 shadow-2xl font-medium bg-cyan-500 hover:bg-cyan-600 p-5"> Back to Home page</a>
            </Link>
        </div>
        
    )
}
export default OverView