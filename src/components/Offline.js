const Offline = ()=>{
    return (
          <div className="offline-container">
      <div className="offline-card">
        <h1>📡 You're Offline</h1>

        <p>
          Please check your internet connection and try again.
        </p>

        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    </div>
    )
}
export default Offline