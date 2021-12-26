import Link from 'next/link'

const Header=(props)=>{
    return(
      <header className="flex items-center justify-between p-4 bg-cyan-800">
        <h1 className='text-4xl font-medium text-white '>Cookie Stand Admin</h1>
        <div className="flex items-center w-1/3 justify-cneter">
            <h2 className="p-1 mr-2 text-white">{props.userData.username} </h2>
            <form onSubmit={props.signouthandler}>
              <button className="p-1 mr-2 text-white rounded bg-cyan-700">Sign Out</button>
            </form>
        <Link  href='/overview'>
            <a className="p-1 rounded bg-cyan-100"> Overview </a>
        </Link>
        </div>
      </header>
    )
    }
export default Header