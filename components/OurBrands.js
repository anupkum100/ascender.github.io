function OurBrands() {
    const brands = ["image 14", "image 3", "image 4", "image 5", "image 6", "image 10"]
    return <section className="ascender-light p-5">
        <h2 className="text-bold text-center">Brands trusted on us</h2>
        <div className="row">
            {brands.map(brand => <div key={brand} className="p-3 col-2">
                <div className="bg-white p-3 text-center">
                    <img src={`./styles/images/${brand}.png`} />
                </div>
            </div>)}
        </div>
    </section>
}