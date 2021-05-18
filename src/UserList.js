import React, {useState,useEffect} from 'react';
import axios from 'axios';

const UserList = () => {
    const [data,setData]=useState([]);
    // useEffect
    useEffect(()=> {
        const recapData = async()=> {

const resultat =await axios ('https://jsonplaceholder.typicode.com/users',
);
setData(resultat.data);

        };
        recapData();  } ,[] )

    return (
        <div class="container ">
            <div  class="row"> <h1>Liste  des Utilisateurs via API</h1></div>
            <div class="row">
<table className="table  table-bordered shadow-lg p-3 mb-5 bg-body rounded" >

           
                <thead >
    <tr className="bg-info">
        <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Adresse</th>
    </tr>
  </thead >
  {data.map(item=>(
<tr className="table table-striped" key={item.id}>
    <td>{item.name}</td> 
    <td>{item.email}</td>
    <td>{item.address.city}</td></tr>
    

            ))}

        
            </table>
            </div>
        </div>
    )
}

export default UserList
