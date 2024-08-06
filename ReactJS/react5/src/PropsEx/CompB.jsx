function CompB(props){

    return <div>
                <h2>Componet - B</h2>   
                <pre>{JSON.stringify(props)}</pre> 
                <h3>Wish Message: {props.message}</h3>
                <h3>Value:{props.two}</h3>
            <hr/>
        </div>

}
export default CompB