const Form = (props)=>{
    return(
        <form className="border rounded-md bg-cyan-700 flex-col w-2/3  mx-auto my-8" onSubmit={props.formHandler}>
          
        <h1 className="text-center font-semibold text-black-100 text-2xl p-3 text-white">Create Cookie Stand</h1>

        <div className="flex mx-3 my-4">
          <label  className="mx-2 font-medium text-white" >Location</label>
          <input name="location" className="flex-auto bg-gray-100 " />
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
          <button className=" bg-cyan-200 w-1/4 font-medium p-5 hover:bg-cyan-300">Create</button>
        </div>
    
      </form>
    )
  }
export default Form