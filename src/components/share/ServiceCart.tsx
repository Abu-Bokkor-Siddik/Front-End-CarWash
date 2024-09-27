import { Link } from "react-router-dom"


const ServiceCart = ({item}) => {
  return (
    <div className="card bg-base-100 mb-5 max-w-[300px] shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co/rkx3Dv4/Basis-Peak.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title gap-3  ">
    hello
      <div className="badge bgColour text-slate-50 ">NEW</div>
      <div className="badge bgColour text-slate-50">Price:500$</div>
    </h2>
    <p className='mb-2'>test just</p>
    <div className="card-actions justify-between ">
      
      <Link to={`/slot/${item?._id}`}><button className="badge badge-outline px-8">View</button></Link>
      <button className="badge badge-outline ">Explore more</button>
    </div>
  </div>
</div>
  )
}

export default ServiceCart
