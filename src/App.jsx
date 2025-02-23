

function App() {
  return (
    <div>
      <PostComponent />
    </div>
  )
}

const style = {width:200,backgroundColor:"white",borderRadius:10,borderWidth:10,borderColor:"gray"}

function PostComponent() {
  return (
    <div style={style}>
      <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" } style={{
        width:20,
        height:20,
        borderRadius:200,
      }} />
    </div>
  )
}

export default App