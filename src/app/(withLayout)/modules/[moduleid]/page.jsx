
const Modules = ({params}) => {
    console.log(params)
    const module = params.moduleid;
    console.log(module)
    
    return (
        <div>
            <h1>This is module page</h1>
        </div>
    );
};

export default Modules;