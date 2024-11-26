function App(){
  return <div>
    <CardWrapper>
      <TextComponent />
    </CardWrapper>
    <CardWrapper>
      <div>
        HELLO OM
      </div>
    </CardWrapper>
    </div>
}

function TextComponent(){
  return <div>
    Hi There
  </div>
}


function CardWrapper({children}){
  return <div style={{
    border: "2px solid black"
  }}>
    {children}     
  </div>
}

export default App;