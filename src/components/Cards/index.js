function Cards(props) {
    return (
        <div>
            {console.log(props.image)}

            <section className="ribbon">
            </section>

            {/* card image */}
            <img style={{ width: "100%", height: "100%", borderRadius: "22px" }} className="image" src={props.image} />

            {/* github link */}
            <a style={{ width: "30%", zIndex: 4, top: "42%" }} className="gitHub" href={props.github}><i className="fa-brands fa-github"></i><br /></a>

            {/* deployed/live site */}
            <a style={{ zIndex: 4, top: "42%" }} width="30%" className={props.className} href={props.livelink} target="_blank"> {props.title} <i className="fa-solid fa-arrow-up-right-from-square"> </i> </a>
        </div>
    )
}

export default Cards