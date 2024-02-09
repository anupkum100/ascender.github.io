function HowWeWork() {
    const works = [{
        title: "Research",
        description: "Embark your journey towards a successful event with Ascender Marketing. Our seamless research process creates a strong foundation for all our upcoming events. Through comprehensive examination and consultation, we formulate the objectives, preferences, and requirements of our clients. Our attention to detail ensures that tailor each event in alignment with the unique needs of our clients.",
        img: "Saly-26.png"
    }, {
        title: "Ideate",
        description: "Ascender Marketing will breathe life into your dreams through innovative ideas. All important information gathered during the research process is carefully translated into a detailed concept for the event in this phase.",
        img: "BULB2C 2.png"
    }, {
        title: "Exhibit",
        description: "In this phase, we will showcase our diligently prepared event concepts to you. Through visually stunning and clear communication, we will bring forward a comprehensible roadmap that will bring your vision to life.",
        img: "ic_horn.png"
    }, {
        title: "Design",
        description: "The creative prowess at Ascender Marketing will help elevate your event by profusing each element and detail of the event with innovation, creativity, and uniqueness catering to your needs. This experience will be lived through all stages from thematic designs and engaging experiences to leave a lasting impression on your guests.",
        img: "tablet.png"
    }, {
        title: "Execute",
        description: "Finally, your dream and vision will unfold into reality with Ascender Marketing. We promise seamless and expert execution by a team of professionals who work with precision, coordination, and attention to detail. All aspects of your event from logistics to management will be executed flawlessly in this stage leaving an impressionable experience for you and your attendees.",
        img: "tekno.png"
    }, {
        title: "Evaluate",
        description: "After the long journey from dreaming to executing, we reach this stage to measure success and refine strategies carefully through our evaluation process. At Ascender Marketing, we are guided by an assessment of every event’s performance. Through analyzing key metrics, gathering feedback, and deriving valuable insights, we ensure to keep getting better at every subsequent event. We execute memorable events and learn and grow with each client and experience.",
        img: "Tick.png"
    }]
    return <section className="p-5">
        <h2 className="text-bold">How we work</h2>

        <div className="d-flex" style={{ overflowX: "auto", overflowY: "hidden" }}>
            {works.map(work => <div className="text-center position-relative flex-shrink-0 mx-3" key={work.title}>
                <img className="position-relative" style={{ top: "65px" }} height="150px" src={`./styles/images/${work.img}`} />

                <div style={{ width: "430px", height: "490px", border: "0.5px solid #A2A2A2", borderRadius: "55px", boxShadow: "3px 3px 3px A2A2A2" }}>
                    <h4 className="text-bold" style={{ marginTop: "100px" }}>{work.title}</h4>
                    <p className="p-5">{work.description}</p>
                </div>
            </div>)}
        </div>
    </section>
}