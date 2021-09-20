const CardTemplate = (props) => {
    return (
        <div className="col-md-12 mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <div className="card-title float-left">{props.title}</div>
                    <div className="float-right">
                        {props.button}
                    </div>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;