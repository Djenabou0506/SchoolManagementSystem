function StatCard({ title, number, icon, color }) {

  return (
    <div className="card shadow-sm">

      <div className={`card-body bg-${color} text-white rounded`}>

        <div className="d-flex justify-content-between align-items-center">

          <div>
            <h5>{title}</h5>
            <h2>{number}</h2>
          </div>

          <div style={{ fontSize: "45px" }}>
            {icon}
          </div>

        </div>

      </div>

    </div>
  );
}

export default StatCard;