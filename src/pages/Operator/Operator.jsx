import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import LazyLoad from "react-lazy-load";
import illustration2 from "../../assets/undraw_access_account_re_8spm.svg";
import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Operator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [bike, setBike] = useState(true);
  const [car, setCar] = useState(false);
  const [auto, setAuto] = useState(false);
  const typeRef = useRef("Mini (3 Seater)");

  const handleModel = () => {
    return typeRef.current.value;
  };

  const [carCount, setCarCount] = useState([
    { type: handleModel(), model: "", cars: "" },
  ]);

  const vehicleRef = useRef(null);
  const handleVehicle = () => {
    if (vehicleRef.current.value === "bike") {
      setBike(true);
      setCar(false);
      setAuto(false);
    } else if (vehicleRef.current.value === "car") {
      setBike(false);
      setCar(true);
      setAuto(false);
    } else if (vehicleRef.current.value === "auto") {
      setBike(false);
      setCar(false);
      setAuto(true);
    }
  };

  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  // const [value2, setvalue2] = useState("");
  const [value3, setvalue3] = useState("");
  const [value4, setvalue4] = useState("");
  const [value5, setvalue5] = useState("");
  const [value6, setvalue6] = useState("");

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [model, setModel] = useState("");
  const [num, setnum] = useState("");
  const [num2, setnum2] = useState("");
  const [count, setCount] = useState("");
  // const [plat, setplate] = useState("");
  // const [cit,setcit]=useState("");

  const onChange1 = (e) => {
    const re = /^[A-Za-z ]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue(e.target.value);
      setError("");
    } else setError("Only Characters allowed");
  };

  const onChangeCompanyName = (e) => {
    const re = /^[A-Za-z ]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue4(e.target.value);
      setError2("");
    } else setError2("Only Characters allowed");
  };

  const onChange2 = (e) => {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue1(e.target.value);
      setnum("");
    } else setnum("Only numbers allowed");
  };

  const onChangeCount = (e) => {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue5(e.target.value);
      setCount("");
    } else setCount("Only numbers allowed");
  };

  const onChangeCompanyPhone = (e) => {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue3(e.target.value);
      setnum2("");
    } else setnum2("Only numbers allowed");
  };

  // const onChangeEmail = (e) => {
  //   const re = /^[A-Za-z0-9]+$/;
  //   if (e.target.value === "" || re.test(e.target.value)) {
  //     setvalue2(e.target.value);
  //     setplate("");
  //   } else setplate("Only characters and numbers allowed");
  // };

  const handlePostData = (info) => {
    fetch("https://pendler-server-jirimon39.vercel.app/operators", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Operator Registration Successful",
            text: "Our team will review your application and get in touch with you soon. Thank you for choosing Pendler! We look forward to revolutionizing the ride-sharing experience together.",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const company = form.company.value;
    const companyPhone = form.companyPhone.value;
    const phone = form.phone.value;
    const office = form.office.value;
    const vehicle = form.vehicle.value;
    const comment = form.comment.value;

    if (vehicleRef.current.value === "bike") {
      const bikes = form.bike.value;
      const operatorInfoBike = {
        fullName: name,
        companyName: company,
        companyPhone: companyPhone,
        email: email,
        phone: phone,
        office: office,
        vehicle: vehicle,
        bikeCount: { bikes: parseInt(bikes) },
        remarks: comment,
      };
      handlePostData(operatorInfoBike);
    } else if (vehicleRef.current.value === "auto") {
      const autos = form.auto.value;
      const operatorInfoAuto = {
        fullName: name,
        companyName: company,
        companyPhone: companyPhone,
        email: email,
        phone: phone,
        office: office,
        vehicle: vehicle,
        autoCount: { autos: parseInt(autos) },
        remarks: comment,
      };
      handlePostData(operatorInfoAuto);
    } else if (vehicleRef.current.value === "car") {
      const operatorInfoCar = {
        fullName: name,
        companyName: company,
        companyPhone: companyPhone,
        email: email,
        phone: phone,
        office: office,
        vehicle: vehicle,
        carCount: carCount,
        remarks: comment,
      };
      handlePostData(operatorInfoCar);
    }
  };

  const handleFormChange = (index, event, model, numb) => {
    if (model) {
      const re = /^[A-Za-z0-9 ]+$/;
      if (event.target.value === "" || re.test(event.target.value)) {
        setvalue6(event.target.value);
        setModel("");
      } else setModel("Only characters and numbers allowed");
    }

    if (numb) {
      const re = /^[0-9]+$/;
      if (event.target.value === "" || re.test(event.target.value)) {
        setvalue5(event.target.value);
        setCount("");
      } else setCount("Only numbers allowed");
    }

    let data = [...carCount];
    data[index][event.target.name] = event.target.value;
    console.log(data);
    setCarCount(data);
  };

  const addField = (event) => {
    event.preventDefault();
    let newField = { type: handleModel(), model: "", cars: "" };
    setCarCount([...carCount, newField]);
  };

  return (
    <div>
      <Helmet>
        <title>Pendler | Operators</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="bg-slate-900">
        <div className="max-w-6xl w-full mx-auto text-center">
          <h1 className="text-4xl font-bold text-center pt-2 text-white mb-6">
            Sign Up As Operator (Early Access)
          </h1>
          <p className="text-lg text-white">
            Be among the first to enjoy the benefits of our innovative
            ride-sharing platform. Sign up for updates <br /> and be part of the
            Pendler community as we transform the way you commute.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
          <div>
            <LazyLoad>
              <img src={illustration2} alt="" />
            </LazyLoad>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-5">
              <div className=" mt-2 mb-3 space-y-2">
                <p className="text-lg font-medium text-primary text-center">
                  Operator Information
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Operator Name
                    </p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered input-primary w-full"
                    value={value}
                    onChange={onChange1}
                    required
                  />
                </div>
                <p className="text-warning">{error}</p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Company Name (Optional)
                    </p>
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="input input-bordered input-primary w-full"
                    value={value4}
                    onChange={onChangeCompanyName}
                  />
                </div>
                <p className="text-warning">{error2}</p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Company Phone (Optional)
                    </p>
                  </label>
                  <input
                    type="text"
                    name="companyPhone"
                    placeholder="Company Phone"
                    className="input input-bordered input-primary w-full"
                    value={value3}
                    onChange={onChangeCompanyPhone}
                  />
                </div>
                <p className="text-warning">{num2}</p>
                <p className="text-lg font-medium text-primary text-center mt-3">
                  Contact Information
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Personal Phone Number
                    </p>
                  </label>
                  <input
                    type="text"
                    value={value1}
                    onChange={onChange2}
                    name="phone"
                    placeholder="Personal Phone Number"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>
                <p className="text-warning">{num}</p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Office Address
                    </p>
                  </label>
                  <input
                    type="text"
                    name="office"
                    placeholder="Office Address"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>
                <p className="text-lg font-medium text-primary text-center mt-3">
                  Vehicle Details
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Pick Your Vehicle Type
                    </p>
                  </label>
                  <select
                    onChange={handleVehicle}
                    ref={vehicleRef}
                    className="select select-bordered select-primary w-full"
                    name="vehicle"
                    required={true}
                  >
                    {/* <option disabled>Pick Your Car Type</option> */}
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                {bike && (
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">
                        Number of Bikes
                      </p>
                    </label>
                    <input
                      type="text"
                      value={value5}
                      onChange={onChangeCount}
                      name="bike"
                      placeholder="Number of Bikes"
                      className="input input-bordered input-primary w-full"
                      required
                    />
                    <p className="text-warning">{count}</p>
                  </div>
                )}
                {auto && (
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">
                        Number of Autos
                      </p>
                    </label>
                    <input
                      type="text"
                      value={value5}
                      onChange={onChangeCount}
                      name="auto"
                      placeholder="Number of Autos"
                      className="input input-bordered input-primary w-full"
                      required
                    />
                    <p className="text-warning">{count}</p>
                  </div>
                )}
                <div>
                  {carCount.map((cars, index) => (
                    <div key={index}>
                      {car && (
                        <div>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Pick Your Car Type
                              </p>
                            </label>
                            <select
                              className="select select-bordered select-primary w-full"
                              name="type"
                              onChange={(value) =>
                                handleFormChange(index, value)
                              }
                            >
                              <option value="Mini (3 Seater)">
                                Mini ( 3 Seater)
                              </option>
                              <option value="Hatch Back (4 Seater)">
                                Hatch Back (4 Seater)
                              </option>
                              <option value="Sedan (4+ Seater)">
                                Sedan (4+ Seater)
                              </option>
                              <option value="Mini SUV (5 Seater)">
                                Mini SUV (5 Seater)
                              </option>
                              <option value="SUV (7 Seater)">
                                SUV (7 Seater)
                              </option>
                              <option value="SUV Plus (8 Seater)">
                                SUV Plus (8 Seater)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Model Name
                              </p>
                            </label>
                            <input
                              type="text"
                              value={cars.model && value6}
                              onChange={(event) =>
                                handleFormChange(index, event, true, false)
                              }
                              name="model"
                              placeholder="Model Name"
                              className="input input-bordered input-primary w-full"
                              required
                            />
                          </div>
                          <p className="text-warning">{model}</p>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Number of Cars
                              </p>
                            </label>
                            <input
                              type="text"
                              value={cars.cars && value5}
                              onChange={(event) =>
                                handleFormChange(index, event, false, true)
                              }
                              name="cars"
                              placeholder="Number of Cars"
                              className="input input-bordered input-primary w-full"
                              required
                            />
                          </div>
                          <p className="text-warning">{count}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {car && (
                  <div onClick={addField} className="flex justify-end">
                    <button className="btn btn-xs btn-primary">
                      <FaPlusCircle></FaPlusCircle> Add More Cars if needed
                    </button>
                  </div>
                )}

                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Remarks (Optional)
                    </p>
                  </label>
                  <textarea
                    name="comment"
                    className="textarea textarea-secondary textarea-lg w-full max-w-lg"
                    placeholder="Add your comments if any"
                  ></textarea>
                </div>

                <label>
                  <input
                    className="btn btn-primary text-white btn-block mt-4"
                    type="submit"
                    value="Submit"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
