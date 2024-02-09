
function OurPresence() {
    const places = [{
        name: "Pune",
        address: {
            heading: "Pune - Corporate Office",
            description: "Ascender Marketing Solutions Private Limited Pyramid Axis Office 302 Baner Road, Behind Croma Showroom Baner Pune, Maharashtra - 411045",
            phone: "7722078396 / 9579740519",
            email: "info@ascendermarketing.com"
        }
    }, {
        name: "Delhi",
        address: {
            description: "Bestech Park view Spa next Sector 67 Gurugram - 122101",
        }
    }, {
        name: "Mumbai",
        address: {
            description: "A-1,Raj industrial complex Marol militry road marol Andheri East Mumbai, Mumbai, Maharashtra - 400059",
        }
    }, {
        name: "Dubai",
        address: {
            description: "Opening Shortly!",
        }
    }, {
        name: "Thailand",
        address: {
            description: "39/135 Moo 10, Soi Khao Noi Sub District Nong Prue Bang Lamung District Chonburi -20150 Thailand ",
        }
    }]
    return <section className="p-5 position-relative ascender-light">
        <h2 className="text-bold">Our Presence</h2>
        <div className="row">
            <div className="col-2">
                <div className="border bg-white">
                    {places.map(place => <div className="place pointer p-3 my-3" key={place.name}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font18">{place.name}</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>

                        <div id={place.name} style={{ width: "250px" }} className="position-absolute child bg-white p-3 rounded shadow">
                            <p className="font18 blue">{place.address.heading || place.name}</p>
                            <p className="font14">{place.address.description}</p>

                            <img style={{ bottom: "-50px", left: "45%" }} className="mb-3 position-absolute" width="16" src="./styles/images/Vector.png" />

                        </div>
                    </div>
                    )}
                </div>
            </div>
            <div className="col-10 text-center">
                <img style={{ maxHeight: "500px" }} className="w-75 h-100" src="./styles/images/Group 103.png" />
            </div>
        </div>

    </section>
}