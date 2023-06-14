

export default function Card() {

    return (
        <div className="card">
            <div className="card__image">
                <img src="https://images.unsplash.com/photo-1686515815090-fcf7f9028950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
            </div>
            <div className="card__info">
                <h3>Card Title</h3>
                <p>Card Description</p>
            </div>
        </div>
    )
}