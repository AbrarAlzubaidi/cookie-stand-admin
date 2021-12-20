import Head from 'next/head'
import { useState } from 'react'

const App =()=> {
  const [stand, setStand] = useState([])
  const formHandler = (e) =>{
    e.preventDefault();
    let stand ={
      location: e.target.location.value,
      min: e.target.min.value,
      max: e.target.max.value,
      avg: e.target.avg.value,
    };
    setStand(stand);
    
  }
  return (
    <div className='bg-cyan-50'>
      <Head>
        <title>Salmon Cookie Stand</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/4090/4090590.png" />
      </Head>
        <h1 className='p-5 text-4xl bg-cyan-800 font-medium	text-white '>Cookie Stand Admin</h1>
      <main >
      <form className="border rounded-md bg-cyan-600 flex-col w-2/3  mx-auto my-8" onSubmit={formHandler}>
          
          <h1 className="text-center font-semibold text-black-100 text-2xl p-3 text-white">Create Cookie Stand</h1>

          <div className="flex mx-3 my-4">
            <label  className="mx-2 font-medium text-white" >Location</label>
            <input name="location" className="flex-auto bg-gray-100 " placeholder={JSON.stringify(stand.location)}/>
          </div>

          <div className="flex  mx-7 my-4 mt-8 gap-x">
            <div>
              <label className='font-medium text-white'>Minimum Customers per Hour</label>
              <input type='number' name="min" className='w-56' />
            </div>
            <div>
              <label className='font-medium text-white'>Maximum Customers per Hour</label>
              <input type='number' name="max" className='w-56' />
            </div>
            <div>
              <label className='font-medium text-white' >Average Cookies per Sale</label>
              <input type='number' name="avg" className='w-56'/>
            </div>
            <button className=" bg-cyan-300 w-1/4 font-medium p-5">Create</button>
          </div>
      
        </form>
        <div className="mx-auto my-6 font-mono text-lg text-center text-cyan-900"> Report Table Coming Soon... </div>

        <div className="mx-auto my-6 font-mono text-lg text-center text-cyan-900">
         {JSON.stringify(stand)}
        </div>
      </main>

      <footer className="bg-cyan-800 p-5 font-medium text-white">
      <p>© 2021 </p>
        
      </footer>
    </div>
  )
}
export default App
