import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Table from './Table'
import Footer from './Footer'
import React from 'react'

const URL = 'http://127.0.0.1:8000/';
const cookieStandURL = URL + 'api/v1/cookie-stand/'

const CookieStandAdmin = (props) => {
    const [hours, setHours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
    const [totals, setTotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [stand, setstore] = useState([])
    let cookie_api_data=[]
    const formHandler = (e) => {
        e.preventDefault();
        let min = e.target.min.value
        let max = e.target.max.value
        let avg = e.target.avg.value
        
        const storeapi= {
            location: e.target.location.value,
            hourly_sales:hours.map(()=>Math.ceil(avg*(Math.ceil(Math.random()*(max-min)+min)))),
            minimum_customers_per_hour: min,
            maximum_customers_per_hour:max,
            average_cookies_per_sale: avg
    
            }
    }

    const getCookieData = async()=>{
        const config = {headers: {'Authorization': 'Bearer ' + props.token}};
        const resCookieData = await axios.get(cookieStandURL,config)
        let total_sum=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        cookie_api_data=resCookieData.data.map(item=>{
            let sum =0
            const store = {
                id:item.id,
                location: item.location,
                hourSales: item.hourly_sales,
            }
            for (let i = 0; i < store.hourSales.length; i++) {
                sum = sum + store.hourSales[i]
            }
            store.total = sum
            
            total_sum = totals.map((item, index) => {
                if (index === totals.length - 1) {
                    return item + store.total
                }
                return item + store.hourSales[index]
            })
            setTotals(total_sum)
        })
        
        
    }
    setstore(cookie_api_data)
    console.log(stand)
    if (props.token){
        getCookieData()
    }
    
    return (
        <div className='bg-cyan-50'>
            <Head>
                <title>Salmon Cookie Stand</title>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/4090/4090590.png" />
            </Head>
            <Header signoutHandler={props.signoutHandler} userData={props.userData} />
            <main >
                <Form formHandler={formHandler} />
                <Table stand={stand} hours={hours} totals={totals} />
            </main>
            <Footer stand={stand} />
        </div>
    )
}

export default CookieStandAdmin
