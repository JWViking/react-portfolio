function Cards(props) {
    return ( 
        <div className={props.className}>
                        <a className="gitHub" href={props.github}><i class="fa-brands fa-github"></i><br /></a>
                        <a className="liveLink" href={props.livelink} target="_blank"> {props.title} <i class="fa-solid fa-arrow-up-right-from-square"> </i> </a>
                    </div>
    )
}

export default Cards