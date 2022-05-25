import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>Management Section</h1>
            <br />
            <p>You do not have permissions to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack} className="btn btn-primary fs-2 Link "
                    style={{ borderRadius: "0px", marginTop: "1rem" }}>Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized
