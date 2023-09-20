interface AppProps {
  day: string
  month: string
  year: string
  hour: string
  minute: string
  second: string
}

function App({ day, month, year, hour, minute, second }: AppProps) {

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
    fontSize: '5rem',
    color: '#fff',
    backgroundColor: '#000',
  }

  const glowStyle: React.CSSProperties = {
    textShadow: '4px 4px 20px #bae0ff',          
  }

  return (
    <div style={containerStyle}>
      <h3 style={glowStyle}>{`${day} ${month} ${year}`}</h3>
      <h1 style={glowStyle}>{`${hour}:${minute}:${second}`}</h1>
    </div>
  )
}

export default App
