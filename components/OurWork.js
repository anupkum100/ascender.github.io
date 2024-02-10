function OurWork() {
    const sections = ["All", "Corporate Events", "Exhibitions", "Product Launch"]
    return <section className="ascender-dark m-auto py-5 text-white text-center">
        <h1 className="text-bold">Our Work</h1>
        <p>Join hands with Ascender Marketing to transform your ideas into extraordinary realities. Our work reflects commitment and passion towards each event and crafts unforgettable experiences for our clients and their audience.
            <br /><br />
            Live this excellence of seamless execution and unique solutions that have accumulated trust from countless clients. Help us help you make all your events shine from intimate gatherings to grand-scale celebrations, as we embark on a beautiful journey of chasing dreams!</p>

        <div className="d-flex align-items-center justify-content-center mt-5">
            {sections.map(section => <div key={section} className="work-section-button border rounded py-1 px-3 mx-2 pointer">{section}</div>)}
        </div>

        <div className="row my-5">
            <div className="col">
                <img src={`./styles/images/Rectangle 29.png`} />
            </div>
            <div className="col">
                <img src={`./styles/images/Rectangle 30.png`} />
            </div>
            <div className="col">
                <img src={`./styles/images/Rectangle 31.png`} />
            </div>
            <div className="w-100"></div>
            <div className="col">
                <img src={`./styles/images/Rectangle 32.png`} />
            </div>
            <div className="col">
                <img src={`./styles/images/Rectangle 33.png`} />
            </div>
            <div className="col">
                <img src={`./styles/images/Rectangle 34.png`} />
            </div>
            <div className="w-100"></div>
            <div className="col">
                <img src={`./styles/images/Rectangle 35.png`} />
            </div>
            <div className="col">
                <img src={`./styles/images/Rectangle 36.png`} />
            </div>
            <div className="col">
                <img src={`./styles/images/Rectangle 37.png`} />
            </div>
        </div>
    </section>
}