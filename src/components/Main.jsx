import React, { useState, useEffect } from "react";

export default function Main() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: "koh kong krav",
      description:
        "Koh Kong Krav Beach is in the 5th place ocated in a natural place, among the mountains. It is partially covered by trees which give natural shade. It is a spacious coastline with crystal turquoise water and white fine sand, so you don't need special shoes.",
      status: "Beach",
      peopleGoing: "1537",
    },
    {
      id: 2,
      title: "phnom sampov",
      description:
        " This legendary 100 metres high mountain, topped by Wat Sampeou, contains 3 natural caves, lined with Buddhist shrines and statues: Pkasla, Lakhaon and Aksopheak.",
      status: "Mountain",
      peopleGoing: "81000",
    },
    {
      id: 3,
      title: "kirirom",
      description:
        "Kirirom National Park, a high altitpine forest, which forms the headwaters for numerous streams feeding Kampong Speu Town.",
      status: "Forest",
      peopleGoing: "2500",
    },
  ]);

  const [newTravel, setnewTravel] = useState({});

  const addNewTrip = (get) => {
    console.log("Form: ", get.target.name);
    console.log("Input: ", get.target.value);
    setnewTravel({ ...newTravel, [get.target.name]: get.target.value });
    console.log({ [get.target.name]: get.target.value });
    console.log("Checking: ", newTravel);
  };
  const submitEvent = (get) => {
    get.preventDefault();
    setTrips([...trips, { id: trips.length + 1, ...newTravel }]);
    console.log(newTravel);
    console.log(trips);
  };
  // Mapping through the array and printing it to the console
  // trips.map((trip) => {
  //   console.log(`ID: ${trip.id}`);
  //   console.log(`Title: ${trip.title}`);
  //   console.log(`Description: ${trip.description}`);
  //   console.log(`Status: ${trip.status}`);
  //   console.log(`People going: ${trip.peopleGoing}`);
  // });

  // const trips = trip.map((t) => (
  //     console.log(`id: ${t.id}
  //     title: ${t.title},
  //     description: ${t.description},
  //     type: ${t.status},
  //     attendees: ${t.peopleGoing}`)

  const handleClick = (id) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id === id) {
          let newStatus = "Beach";
          if (trip.status === "Beach") {
            newStatus = "Forest";
          } else if (trip.status === "Forest") {
            newStatus = "Mountain";
          }
          return { ...trip, status: newStatus };
        } else {
          return trip;
        }
      })
    );
  };

  useEffect(() => {
    console.log(trips);
  }, [trips]);

  // ));
  // console.log(trips);

  return (
    <div>
      {/* Top main */}
      <div className="flex justify-between">
        {/* Header */}
        <div className="text-3xl font-sans ">
          <b className="inline-block align-middle">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-700">
              Good
            </span>{" "}
            Evening Team!
          </b>
        </div>

        {/* Btn */}
        <div>
          {/* <button class="btn btn-outline inline-block border border-slate-600 rounded-lg px-5 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
            ADD NEW INFO
          </button> */}

          {/* The button to open modal */}
          <label
            htmlFor="my-modal-1"
            className="btn btn-outline inline-block align-middle border border-slate-600 rounded-lg text-center pt-3 text-sm font-medium uppercase leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
          >
            ADD NEW INFO
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-1"
                className="btn btn-sm btn-circle absolute right-2 top-2 border-red-500 border-2"
              >
                ✕
              </label>

              {/* input */}
              <div className="flex flex-col">
                {/* Title form */}
                <label className="text-left text-lg text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Siem Reap"
                  required
                  onChange={addNewTrip}
                  className="input input-bordered input-primary w-full max-w-md mb-3"
                />

                {/* Description form */}
                <label className="text-left text-lg text-gray-300 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  required
                  onChange={addNewTrip}
                  placeholder="Beautiful place on the earth"
                  className="input input-bordered input-primary w-full max-w-md mb-3"
                />

                {/* Amount of people */}
                <label className="text-left text-lg text-gray-300 mb-1">
                  People Going
                </label>
                <input
                  type="number"
                  name="peopleGoing"
                  required
                  placeholder="1000"
                  onChange={addNewTrip}
                  className="input input-bordered input-primary w-full max-w-md mb-3"
                />

                {/* Select list */}
                <label className="text-left text-lg text-gray-300 mb-1">
                  Type of advanture
                </label>
                <select
                  name="status"
                  required
                  onChange={addNewTrip}
                  className="select select-warning w-full max-w-md"
                >
                  <option disabled selected>
                    ---- Choose any option ----
                  </option>
                  <option className="text-cyan-600 p-6">Beach</option>
                  <option className="text-gray-400 p-6">Forest</option>
                  <option className="text-green-600 p-6">Mountain</option>
                </select>
              </div>
              {/* <button className="btn flex justify-start rounded-lg mt-6 text-center px-5 py-1.5 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                  <span>
                   SUBMIT 
                  </span>
                  
              </button> */}
              <button
                type="submit"
                onClick={submitEvent}
                className="btn flex text-gray-300 justify-start mt-6 border-slate-600 rounded-lg text-center px-5 py-1 text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] hover:border-emerald-700 border"
              >
                <span>SUBMIT</span>
              </button>
              {/* <button className="btn btn-outline btn-info text-slate-400">SUBMIT</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* contents */}
      <div className="flex justify-between mt-7 flex-wrap overflow-auto">
        {trips.map((list) => (
          <div class="max-w-xs w-80 p-4 relative rounded-xl border border-blue-500 mb-4 ">
            <span class="absolute rounded-t-xl inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 -mt-0"></span>
            <div class="flex items-center gap-4">
              <h3 class="text-2xl font-bold sm:text-2xl uppercase mb-2">
                {list.title}
              </h3>
            </div>
            <div>
              <p class="mb-2 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 text-left">
                {list.description}
              </p>
            </div>
            <div className="flex flex-col text-left mb-2">
              <p>People Going</p>
              <p className="text-lg font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {list.peopleGoing}
                </span>
              </p>
            </div>

            <div className="card-actions justify-between">
              <button
                onClick={() => handleClick(list.id)}
                className={
                  list.status === "Beach"
                    ? "btn w-32 order border-cyan-600 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                    : list.status === "Forest"
                    ? "btn w-32 border-green-600 focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] border"
                    : "btn w-32 focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] border border-red-900"
                }
              >
                {list.status}
              </button>

              {/* ---------------------------- */}
              {/* read alert */}
              <label
                htmlFor={`my-modal-${list.id + 1}`}
                className="btn uppercase"
              >
                Read Details
              </label>
              {/* Put this part before </body> tag */}
              <input
                type="checkbox"
                id={`my-modal-${list.id + 1}`}
                className="modal-toggle"
              />
              <div className="modal">
                {/* ------- */}
                <div className="modal-box relative">
                  <label
                    htmlFor={`my-modal-${list.id + 1}`}
                    className="btn btn-sm btn-circle absolute right-2 top-2 border-red-500 border-2"
                  >
                    ✕
                  </label>

                  {/* text body */}
                  <div className="flex flex-col">
                    <h3 class="text-xl text-left font-bold sm:text-xl uppercase ">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {list.title}
                      </span>
                    </h3>
                    <p className="text-left mt-4">{list.description}</p>
                    <p className="text-left mt-4 text-base">
                      Around{" "}
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {list.peopleGoing}
                      </span>{" "}
                      people going there
                    </p>
                  </div>
                  {/* ---- text body end ---- */}
                </div>
                {/* ------- */}
              </div>
              {/* ---------------------------- */}
            </div>
          </div>
        ))}

        {/* // <div className="card w-80 h-72 bg-primary text-primary-content">
          //   <div className="card-body">
          //     <h2 className="card-title uppercase">{list.title}</h2>
          //     <span className="line-clamp-3">{list.description}</span>

          //     <div className="card-actions justify-between">
          //       <button className="btn">{list.status}</button>
          //       <button className="btn">Buy Now</button>
          //     </div>
          //   </div>
          // </div> */}
        {/* <div class="max-w-xs p-4 relative rounded-lg border border-blue-500 ">
          <span class="absolute rounded-t-xl inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 -mt-0">
          </span>
          <div class="flex items-center gap-4">
            <h3 class="text-2xl font-bold sm:text-2xl uppercase">{list.title}</h3>
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {list.description}
          </p>
          <div className="card-actions justify-between">
                <button className="btn">{list.status}</button>
                <button className="btn uppercase">Read Detail</button>
              </div>
        </div> */}

        {/* <div className="w-10">
          <span class="border relative rounded-lg border-t-4 border-blue-500 p-4 ">
            <span class="absolute rounded-t-xl inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 -mt-1"></span>
            <div class="flex items-center gap-4">
              <h3 class="text-2xl font-bold sm:text-2xl">100+</h3>
            </div>

            <p class="mt-4 font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, provident.
            </p>
          </span>
        </div> */}

        {/* Plain data */}
        {/* <div className="card w-80 h-72 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title uppercase">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose? </p>
            <div className="card-actions justify-between">
              <button className="btn">Buy Now</button>
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-80 h-72 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-80 h-72 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
