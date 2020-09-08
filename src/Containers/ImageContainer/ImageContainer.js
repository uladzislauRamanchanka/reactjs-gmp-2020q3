import React from 'react'
import classes from './ImageContainer.module.css'
import ItemImage from '../../Components/ItemImage/ItemImage'

const ImageContainer = props => {

    const images = [
        {id: 1, url: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262', shortDescription: 'shortDescription_1', year: 2018, genre: 'Drama, Biography, Music'},
        {id: 2, url: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/950e439404c3d5eddd86ae876cec83bf_949b5045-2503-4883-bcd2-ff1f31f5b14c_480x.progressive.jpg?v=1573588746', shortDescription: 'shortDescription_2', year: 2004, genre: 'Action & Adventure'},
        {id: 3, url: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1a6d4e37fd0d963bf82e6423651bb4be_daa1905d-ee63-4cbb-bf67-cb188f2cf4db_480x.progressive.jpg?v=1573588856', shortDescription: 'shortDescription_3', year: 2003, genre: 'Phantasy'},
        {id: 4, url: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0f8dfdb1be3f119c6aa68b6ab22259ac_480x.progressive.jpg?v=1573587282', shortDescription: 'shortDescription_4', year: 2016, genre: 'Crime'},
        {id: 5, url: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8e5246d5f90632343a5ea3fa05c7255c_480x.progressive.jpg?v=1573618736', shortDescription: 'shortDescription_5', year: 1997, genre: 'Army, Crime'},
        {id: 6, url: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c11f66ec0451a36f5aae494b1509b069_bf869227-c34a-449c-83ff-ed093d341dd3_480x.progressive.jpg?v=1573616179', shortDescription: 'shortDescription_6', year: 2006, genre: 'Crime, Phantasy'},
    ]
    return (
        <div className={classes.ImageContainer}>
            {images.map(item => {
                return (
                <ItemImage 
                url={item.url} 
                year={item.year} 
                genre={item.genre} 
                name={item.shortDescription}
                key={item.id}
                editItem={props.editItem}
                />
                )
                
            })}    
        </div>
    )
}

export default ImageContainer