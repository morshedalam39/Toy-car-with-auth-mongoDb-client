import React, { useContext, useEffect, useState } from 'react';
import ToyTable from './ToyTable';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const AllToys = () => {
  useTitle('All Toys')
    const [toys , setToys]=useState() 
    const [searchByToyName , setsearchByToyName]=useState("")
    const {user}=useContext(AuthContext);

    useEffect(() => {
        fetch('https://toy-car-server-lac.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    const handleSearch = () => {
      fetch(`https://toy-car-server-lac.vercel.app/searchToyName/${searchByToyName}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setToys(data);
        });
    };
    console.log(toys);

    const handelToast =()=>{
      if(!user){
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Login First',
             
            })
      }

  }
    return (
        <div>
                <div className="flex flex-col md:flex-row items-center justify-center ">
      <input
       onChange={(e) => setsearchByToyName(e.target.value)}
        className="border border-gray-300 rounded-md py-2 px-4 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        type="text"
        placeholder="Search"
      />
      <button 
      onClick={handleSearch}
      className="btn btn-warning hover:bg-yellow-600 " type="button">
        Search
      </button>
    </div>
          <div className="overflow-x-auto mt-5">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>No</th> 
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Action</th>

      </tr>
    </thead> 
    

        {
          toys?.map((toy , index) => <ToyTable
            key={toy._id}
            toy={toy}
            index={index}
            handelToast={handelToast}
        ></ToyTable>)
        }



    

  </table>
</div>
        </div>
    );
};

export default AllToys;