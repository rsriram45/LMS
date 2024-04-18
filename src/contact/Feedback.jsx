// function Feedback() {
//   return (
//     <>
//       <div
//         className="absolute mt-52 ml-48 
// 						w-80 float-left border-2 p-2 
// 						rounded-xl shadow-xl text-xl"
//       >
//         <form>
//           <p className="text-2xl">Feedback & Queries</p>
//           <div>
//             <label className="text-sm">Select Issue*</label>
//             <br></br>
//             <select
//               className="bg-gray-50 border border-gray-300 
// 										text-gray-600 text-sm rounded-lg 
// 										focus:border-blue-500 w-full p-2.5"
//             >
//               <option value="Feedback">-- Select Your Query --</option>
//               <option value="Feedback">Feedback</option>
//               <option value="Feedback">Course Related Queries</option>
//               <option value="Feedback">Payment Related Issue</option>

//               <option value="Feedback">Advertise With Us</option>
//             </select>
//             <br></br>
//             <label className="text-sm">Email Address*</label>
//             <br></br>
//             <input
//               className="bg-gray-50 border border-gray-300 
// 										text-sm rounded-lg focus:border-blue-500
// 										w-full p-2.5"
//               type="email"
//               placeholder="eduford@gmail.com"
//             />
//             <br></br>
//             <label className="text-sm">Contact No.</label>
//             <br></br>
//             <input
//               className="bg-gray-50 border border-gray-300
// 										text-sm rounded-lg focus:border-blue-500 
// 										w-full p-2.5"
//               type="text"
//               placeholder="1234567890"
//             />
//             <br></br>
//             <label className="text-sm">Drop Your Query</label>
//             <br></br>
//             <textarea
//               className="bg-gray-50 border border-gray-300 
// 											text-sm rounded-lg 
// 											focus:border-blue-500 
// 											w-full p-2.5"
//               rows="4"
//               cols="25"
//               maxlength="300"
//               placeholder="Max Allowed Characters: 300"
//             ></textarea>
//             <br></br>
//             <button
//               className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//               type="button"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Feedback;
// Feedback.js
import React from "react";
 function Feedback() {
  return (
    <div className="absolute mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40 
                    mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 
                    w-80 sm:w-96 md:w-104 lg:w-112 xl:w-120 
                    float-left border-2 p-2 rounded-xl shadow-xl text-xl">
      <form>
        <p className="text-2xl">Feedback & Queries</p>
        <div>
          <label className="text-sm">Select Issue*</label>
          <br></br>
          <select className="bg-gray-50 border border-gray-300 
                            text-gray-600 text-sm rounded-lg 
                            focus:border-blue-500 w-full p-2.5">
            <option value="Feedback">
              -- Select Your Query --
            </option>
            <option value="Feedback">
              Feedback
            </option>
            <option value="Feedback">
              Course Related Queries
            </option>
            <option value="Feedback">
              Payment Related Issue
            </option>
           
            <option value="Feedback">
              Advertise With Us
            </option>
          </select>
          <br></br>
          <label className="text-sm">Email Address*</label>
          <br></br>
          <input className="bg-gray-50 border border-gray-300 
                            text-sm rounded-lg focus:border-blue-500
                            w-full p-2.5"
                type="email"
                placeholder="eduford@gmail.com" />
          <br></br>
          <label className="text-sm">Contact No.</label>
          <br></br>
          <input className="bg-gray-50 border border-gray-300
                            text-sm rounded-lg focus:border-blue-500 
                            w-full p-2.5"
                type="text"
                placeholder="1234567890" />
          <br></br>
          <label className="text-sm">
            Drop Your Query
          </label>
          <br></br>
          <textarea className="bg-gray-50 border border-gray-300 
                                    text-sm rounded-lg 
                                    focus:border-blue-500 
                                    w-full p-2.5"
                    rows="4"
                    cols="25"
                    maxLength="300"
                    placeholder="Max Allowed Characters: 300">
          </textarea>
          <br></br>
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4"
                  type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Feedback;


