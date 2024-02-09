function OurStats() {
    const stats = [{
        count: 80,
        description: "Happy Clients"
    }, {
        count: 500,
        description: "Events Managed"
    }, {
        count: 200,
        description: "Promotions"
    }, {
        count: 50,
        description: "Exhibitions"
    }]
    return <section className="ascender-dark p-5">
        <h1 className="text-bold outlined">OUR STATS</h1>
        <div className="row">
            {stats.map(stat => <div className="col-3 d-flex flex-column" key={stat.description}>
                <h1 className="text-bold yellow">{stat.count}</h1>
                <h4 className="text-light">{stat.description}</h4>
            </div>)}

        </div>

        <p className="text-light my-5">Delivering a wide range of events services focusing on the best in class in event industry by our team of experts and specialists.</p>
    </section>
}