const HeroCard =()=>{
    return(
        <div className="col">
            <div className="card">
                <img src="https://via.placeholder.com/50x50"alt="heroName" className="img-fluid image card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">heroName</h3>
                </div>
                <footer className="card-footer">
                    view more
                </footer>
            </div>
        </div>
    )
}

export default HeroCard