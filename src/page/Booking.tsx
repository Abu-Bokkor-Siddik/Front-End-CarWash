/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeCart } from "@/redux/features/bookingSlice";
import { useBookingMutation } from "@/redux/api/bookingApi/bookingApi";

const Bookings = () => {
  const SelectedData = useAppSelector((store) => store.booking.carts);
  console.log(SelectedData)
  const [login, { data}] = useBookingMutation();
console.log(data)
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    // console.log(id)
    dispatch(removeCart(id));
  };
// console.log('16',data?.data?.payment_url)
// if (data?.success as boolean|undefined) {
  
// }
  const handleBooking = async (e:any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const vehicleType = e.target.vehicleType.value;
    const vehicleBrand = e.target.vehicleBrand.value;
    const vehicleModel = e.target.vehicleModel.value;
    const manufacturingYear = e.target.manufacturingYear.value;
    const registrationPlate = e.target.registrationPlate.value;
    const transactionId = `txr-${Date.now()}`;
    SelectedData?.forEach(async (cart: any) => {
      const serviceId = cart[0]._id;
      const slotId = cart[0]?.service._id;
      const price = cart[0]?.service.price;
      const duration = cart[0]?.service.duration;
      const isBooked = cart[0]?.isBooked;
      const endTime = cart[0]?.endTime;
      const startTime = cart[0]?.startTime;
      const date = cart[0]?.date;
      
     console.log(transactionId)
      // motion
      try {
   const res=  await  login({
          name,
          email,
          vehicleBrand,
          vehicleModel,
          vehicleType,
          manufacturingYear,
          registrationPlate,
          serviceId,
          slotId,
          date,
          duration,
          endTime,
          startTime,
          isBooked,
          price,
          transactionId,
        }).unwrap();
        
       if (res?.success) {
        window.location.href=res?.data?.payment_url;
       }
      } catch (error) {
        console.log(error);
      }
      // console.log('res from server11111',isSuccess)
    });
   
    // await
    console.log(data)
  };
  return (
    <div className="mx-auto pt-32  min-h-[800px] max-w-[1200px] h-auto ">
      {/* <Booking></Booking> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-around ">
        {/* st */}

        <div>
          {SelectedData?.map((item: any, index: any) => (
            <div
              key={index}
              className="card bg-base-100  mb-5 ml-20 w-80 min-h-52 shadow-xl"
            >
              <div className="card-body">
                <div className="flex justify-between items-center gap-10">
                <h2 className="card-title">{item[0]?.service?.name}</h2>
                <p className="text-xl">Price : {item[0]?.service?.price}</p>
                </div>
                <p>Duration:{item[0]?.service?.duration}</p>
                <p>Description:{item[0]?.service?.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(item[0]._id)}
                    className="btn btn-sm btn-active"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div>
          <div className="hero-content flex-col ">
            <div className="card  flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleBooking} className="card-body">
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      // onChange={(e)=>dispatch(setEmail(e.target.value))}
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row  gap-5 flex-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">VehicleType</span>
                    </label>
                    <input
                      name="vehicleType"
                      type="text"
                      // onChange={(e)=>dispatch(setPassword(e.target.value))}
                      placeholder="vehicleType"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/*  */}
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">VehicleBrand</span>
                    </label>
                    <input
                      name="vehicleBrand"
                      type="text"
                      // onChange={(e)=>dispatch(setPassword(e.target.value))}
                      placeholder="vehicleBrand"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row  gap-5 flex-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">VehicleModel</span>
                    </label>
                    <input
                      name="vehicleModel"
                      type="text"
                      // onChange={(e)=>dispatch(setPassword(e.target.value))}
                      placeholder="vehicleModel"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/*  */}
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">ManuFacturingYear</span>
                    </label>
                    <input
                      name="manufacturingYear"
                      type="text"
                      // onChange={(e)=>dispatch(setPassword(e.target.value))}
                      placeholder="manufacturingYear"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">RegistrationPlate</span>
                  </label>
                  <input
                    name="registrationPlate"
                    type="text"
                    // onChange={(e)=>dispatch(setPassword(e.target.value))}
                    placeholder="registrationPlate"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Bookings;
