import React from 'react'
import { Button } from './Button'
import './ProductCard.css'

export const ProductCard = () => {
  return (
    <div className='card'>
        <img className='productImage' src="https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-17-pro-256-gb.png?_gl=1*1dwi6az*_gcl_aw*R0NMLjE3NjkzMTUzMTIuQ2owS0NRaUEtTkhMQmhEU0FSSXNBSWhlOVgxODJ0MzI1RTJMbURvVmFGdVd1TDY5dTdZZTJpbF9NZVcxN0dRVUwtZkxBVnRNU252MzIza2FBaG1HRUFMd193Y0I.*_gcl_au*NTA2Njg0MjgyLjE3NjkzMTUzMTI.*_ga*MzkzNjYyMzM0LjE3MjA3NzMyNTc.*_ga_QLK8WFHNK9*czE3NjkzMTUzMTIkbzMxJGcwJHQxNzY5MzE1MzEzJGo1OSRsMCRoMTI2OTAwMjgwNg.." alt=""/>
        <h2>ip 17prm</h2>
        <p>3500000</p>
        <Button></Button>

    </div>
    
  )
}
