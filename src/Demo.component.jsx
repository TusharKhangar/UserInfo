import {useState}    from "react";
import {Button} from "reactstrap";
function DemoComponent(){
    const [count, setCount] = useState(0);
    return(
        <>
            <div style={{padding : 'auto' , border : 'solid 2px red'}}>
                <button onClick={() =>
                    (count<20)?setCount((count) => count+1):setCount(() => 0)}>
                    {(count<20)?<p>count is {count}</p>:<p>count is {count} reset</p>}
                </button>
            </div>
        </>
    )
}
export  default  DemoComponent;
