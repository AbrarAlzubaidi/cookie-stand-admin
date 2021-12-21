import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Table from '../components/Table'

const App =()=> {
  const[hours,setHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  const[totals,setTotals]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  const [stand, setstore] = useState([])

  const formHandler = (e) =>{
    e.preventDefault();
    let min=e.target.min.value
    let max=e.target.max.value
    let avg=e.target.avg.value
    
    let sum=0
   
    
    const store= {
      location: e.target.location.value,
      hourSales:hours.map(()=>Math.ceil(avg*(Math.ceil(Math.random()*(max-min)+min)))),
    }

    for (let i=0; i< store.hourSales.length; i++){
      sum=sum+store.hourSales[i]
    }
    store.total=sum
    
    setstore([...stand,store])
  

    let total_sum=totals.map((item,index)=>{
      if (index===totals.length-1){
        return item + store.total
      }
     return item + store.hourSales[index]
  })
   
  setTotals(total_sum)
    
  }
  return (
    <div className='bg-cyan-50'>
      <Head>
        <title>Salmon Cookie Stand</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/4090/4090590.png" />
      </Head>
      <Header/>
      <main >
        <Form formHandler = {formHandler}/>
        <Table stand={stand} hours={hours} totals={totals}/>
      </main>
      <Footer stand={stand}/>

      
    </div>
  )
}
export default App
