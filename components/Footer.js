

function Footer() {
    return <section className="ascender-dark py-5 px-3">
        <h1 className="text-bold outlined text-center">LET’S DO GOOD TOGETHER</h1>

        <div className="row text-white">
            <div className="col-4 text-center">
                <img src="./styles/images/Ascender Logo_Black-01 3.png" />
            </div>
            <div className="col-8">
                <h2>
                    <span className="text-bold">Want to collaborate?</span>
                    <br />
                    Have queries?
                </h2>

                <p>Write to us at <a>info@ascendermarketing.com</a>
                    <br /><br />
                    For HR related queries email us on <a>swati@ascendermarketing.com</a>
                </p>
            </div>
        </div>
        <div className="row mt-5 text-white w-75 m-auto">
            <div className="col-4">
                <p className="text-bold">Contact Us</p>
                <p className="text-bold">Ascender Marketing Solutions Private Limited</p>
                <p>Pyramid Axis Office 302 Baner Road, Behind Croma Showroom Baner Pune, Maharashtra - 411045</p>
                <div className="d-flex align-items-center">
                    <img style={{ height: 20 }} className="me-1" src="./styles/images/Phone.png" />
                    <span className="mx-2">7722078396 / 9579740519</span>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <img style={{ height: 20 }} className="me-1" src="./styles/images/Email.png" />
                    <span>info@ascendermarketing.com</span>
                </div>


            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <p className="text-bold">Follow Us</p>
                <div className="d-flex">
                    <a target="_blank" href="https://www.instagram.com/ascender_marketing_events?igsh=NHhsd2t6YWxjenV1&utm_source=qr">
                        <img style={{ height: 30 }} className="me-2" src="./styles/images/Insta.png" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/ascender-marketing-solutions/mycompany/?viewAsMember=true">
                        <img style={{ height: 30 }} className="me-2" src="./styles/images/twitter.png" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/ascendermarketing">
                        <img style={{ height: 30 }} className="me-2" src="./styles/images/facebook.png" />
                    </a>
                </div>
            </div>
        </div>
    </section>
}