function App(props) {
    return (
        
        <div style={{ backgroundColor: "Orange" }}>
            <h1>Name is {props.name}</h1>
            <h1>City is { props.city}</h1>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}