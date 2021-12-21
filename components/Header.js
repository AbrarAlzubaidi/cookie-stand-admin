import Link from 'next/link'

const Header=(props)=>{
    return(
      <header className="flex justify-between bg-cyan-800 p-4 items-center">
        <h1 className=' text-4xl font-medium text-white '>Cookie Stand Admin</h1>

        <Link  href='/overview'>
            <a className="p-1 rounded bg-cyan-100"> Overview </a>
        </Link>
      </header>
    )
    }
export default Header