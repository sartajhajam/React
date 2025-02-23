import { useState } from "react";


function App() {
  return (
    <div style={{ background: "#dcdde1", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <PostComponent />
        </div>
        <div>
          <ToggleMessage />
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "gray",
  padding: 20,
};

// renders the toggle message component
const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};


function PostComponent() {
  return (
    <div style={{ style }}>
      <div style={{ display: "flex" }}>
        <img
          src={
            "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          }
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>100xdevs</b>
          <div>23,888 followers</div>
          <div>12 M</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        What to know how to win big ? Check out these folks won 6000 $ in
        bounties ?
      </div>
    </div>
  );
}

export default App;

