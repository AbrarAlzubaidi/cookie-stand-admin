import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react';

import Header from '../components/Header.js';
import Form from '../components/Form';
import Table from '../components/Table.js';
import Footer from '../components/Footer.js'


const baseUrl = process.env.NEXT_PUBLIC_COOKIE_STAND_API;
const cookieStandsUrl= baseUrl + 'api/v1/cookie-stands/'

export default function CookieStandAdmin(props) {

  const[hours,setHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  const[report, setallstores] = useState([])
  const[totals,setbranchestotals]=useState([])
  

  async function deleteIcon(event){
        event.preventDefault(); 
        const config = { headers: {'Authorization': 'Bearer ' + props.token}};
        await axios.delete(cookieStandsUrl+ `${event.target.id.value}`, config)
        getbranchesAPI()
    }


    function formHandler(event){

        event.preventDefault();
        let min=parseInt(event.target.min.value)
        let max=parseInt(event.target.max.value)
        let avg=parseInt(event.target.avg.value)
        
        const storeapi= {
        location: event.target.location.value,
        hourly_sales:hours.map(()=>Math.ceil(avg*(Math.ceil(Math.random()*(max-min)+min)))),
        minimum_customers_per_hour: min,
        maximum_customers_per_hour:max,
        average_cookies_per_sale: avg
        }

        async function postbaranchAPI(){
            const config = { headers: {'Authorization': 'Bearer ' + props.token}};
            await axios.post(cookieStandsUrl, storeapi ,config)
            
            getbranchesAPI()
        }
        
        postbaranchAPI()  
    }


    useEffect( ()=>{
        if (props.token){
            getbranchesAPI()  
        }
    }, [props.token])


    async function getbranchesAPI(){

        const config = {headers: {'Authorization': 'Bearer ' + props.token}};
        const apistands= await axios.get(cookieStandsUrl, config)
        let total_sum=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        let apidata=apistands.data.map(item =>{

            let sum=0

            const store= {
                id:item.id,
                location: item.location,
                hourlySales:item.hourly_sales,
            }
            
            for (let i=0; i< store.hourlySales.length; i++){
            sum=sum+store.hourlySales[i]
            }
            store.total=sum

            
            total_sum=total_sum.map((item,idx)=>{
            if (idx===total_sum.length-1){
                return item + store.total
            }
                return item + store.hourlySales[idx]
            })
            console.log('ts',total_sum)

            setbranchestotals(total_sum)

            return store
        })

        setallstores(apidata)
    }

  
  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Compnent */}
      <Header />

      <main className="">

          {/* Form Function */}
          < Form formHandler={formHandler}  />
        
          {/* Report Table */}
          <Table report={report} hours={hours}  totals={totals}  deleteIcon={deleteIcon} />

      </main>

      {/* Footer Component */}
      <Footer report={report}/>
     
    </div>
  )
}