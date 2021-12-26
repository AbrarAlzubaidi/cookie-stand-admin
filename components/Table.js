const Table=(props)=>{
    if (props.stand.length === 0){
      return (
        <h2 className="mx-auto my-8 text-xl font-semibold text-center">No Cookie Stands Available.. Add one</h2>
      )
    }else{
      return(
        <table className='w-5/6 mx-auto mt-4 mb-5 text-center border rounded-md border-cyan-300'>

          <thead className='text-white border border-cyan-800 bg-cyan-900'>
            <th className='px-2'>Location</th>
            {
              props.hours.map(item=>{
                return(
                  <th>{item} </th>
                )
              })
              }
            <th>Totals</th>
          </thead>
        
          <tbody>
          {
            props.report.map((store,idx)=>{
              
              const element =
              <>
                <td className='px-2 border border-cyan-800' >{store.location}</td>
                {
                  store.hourlySales.map(item=>{
                    return(
                      <td className='border border-cyan-800'> {item} </td>
                    )
                  })
                }
                <td className='border border-cyan-800'>{store.total}</td>
              </>

              if (idx%2==0){
                return(
                  <tr className='bg-cyan-400'>
                    {element}
                  </tr>
                )
              }else{
                return(
                  <tr className='bg-cyan-200'>
                    {element}
                  </tr>
                ) 
              }
            })
          }
          </tbody>

          <tfoot className='bg-cyan-500'>
              <td className='px-2 font-semibold text-white border border-cyan-800 bg-cyan-800'>Totals</td>
              {
              props.totals.map(item=>{
                return(
                  <td className='font-semibold text-white border border-cyan-800 bg-cyan-800'>{item}</td>
                )
              })
              } 
          </tfoot>
        </table>
      ) 
  }
}

export default Table