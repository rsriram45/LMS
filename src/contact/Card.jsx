import React from "react";

 function Card() {
	return (
		<div >
      <div className="mt-[200px] float-right">
			 <div className="h-52 ml-48 float-left 
							-mt-100 w-96 flex-col 
							rounded-xl bg-white bg-clip-border 
							text-gray-700 shadow-2xl">
				<div className="p-6">
					<h5 className="text-center mr-4 mb-2 
								block font-sans text-xl 
								font-semibold text-blue-gray-900 
								antialiased">
						Reach Us At
					</h5>
					<ul>
						<li className="mt-2">
							<span><i className="fa fa-phone mr-2"></i> </span>
							+91-9998887776
						</li>
						<li className="mt-2">
							<span><i className="fa fa-envelope mr-2"></i> </span>
							<span>feedback@geeksforgeeks.org</span>
						</li>
						<li className="mt-2">
							<span><i className="fa-solid fa-map-pin mr-2"></i> 
							</span>
								A-143, 9th Floor, Sovereign Corporate 
							<span className="pl-4">
								Tower, Sector-136, Noida, Uttar Pradesh
							</span>
						</li>
					</ul>
				</div>
			</div> 
      </div>
			<div class=" mt-36 w-96 text-center float-right 
						-mt-11 w-1/3 flex-col rounded-xl 
						bg-white text-gray-700 shadow-2xl">
				<div className="p-6 ">
					<h5 className="mb-2 block font-sans 
								text-xl font-semibold 
								text-blue-gray-900 antialiased">
						Branding & Collaboration
					</h5>
					<i className="fa fa-handshake fa-2xl"></i>
					<div className="text-left mt-4">
						<span><i className="fa fa-envelope mr-2"></i> </span>
						<span>eduford@gmail.com</span>
					</div>
					<div className="mt-2 text-left">
					<span><i className="fa-solid fa-map-pin mr-2"></i> </span>
							A-143, 9th Floor, Sovereign Corporate
						Tower, Sector-<span className="pl-5">136,
						Noida, Uttar Pradesh</span>
					</div>
				</div>
			</div>
      {/* <div className="mt-[650px] float-left  ">
			 <div className="h-52 ml-48 float-left 
							-mt-100 w-96 flex-col 
							rounded-xl bg-white bg-clip-border 
							text-gray-700 shadow-2xl">
				<div className="p-6">
					<h5 className="text-center mr-4 mb-2 
								block font-sans text-xl 
								font-semibold text-blue-gray-900 
								antialiased">
						Reach Us At
					</h5>
					<ul>
						<li className="mt-2">
							<span><i className="fa fa-phone mr-2"></i> </span>
							+91-9998887776
						</li>
						<li className="mt-2">
							<span><i className="fa fa-envelope mr-2"></i> </span>
							<span>feedback@geeksforgeeks.org</span>
						</li>
						<li className="mt-2">
							<span><i className="fa-solid fa-map-pin mr-2"></i> 
							</span>
								A-143, 9th Floor, Sovereign Corporate 
							<span className="pl-4">
								Tower, Sector-136, Noida, Uttar Pradesh
							</span>
						</li>
					</ul>
				</div>
			</div> 
      </div> */}
      <div class=" mt-[500px] w-96 text-center float-right 
						-mt-110 w-1/3 flex-col rounded-xl 
						bg-white text-gray-700 shadow-2xl ">
				<div className="p-6 ">
					<h5 className="mb-2 block font-sans 
								text-xl font-semibold 
								text-blue-gray-900 antialiased">
						Branding & Collaboration
					</h5>
					<i className="fa fa-handshake fa-2xl"></i>
					<div className="text-left mt-4">
						<span><i className="fa fa-envelope mr-2"></i> </span>
						<span>eduford@gmail.com</span>
					</div>
					<div className="mt-2 text-left">
					<span><i className="fa-solid fa-map-pin mr-2"></i> </span>
							A-143, 9th Floor, Sovereign Corporate
						Tower, Sector-<span className="pl-5">136,
						Noida, Uttar Pradesh</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Card;
