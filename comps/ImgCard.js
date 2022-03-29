import styled from "styled-components";

let RedCont = styled.div`     //styled.View
    // background-color:red
    background-color: ${props=>props.cl};
    color: ${props=>props.text_cl}
`;

export default function ImgCard({
    img="/dog.jpg",
    bg="red",
    tcl="#FFF",
    children=null
    //BE CAREFUL USING CHILDREN SINCE IT IS SPECIAL WORD SINCE YOU CAN ADD CONTENT INSIDE YOUR COMPONENT.. Without it, in the index.js, you can write anything as the content but it will wont show up unless you use "children" 
}){
    return <RedCont cl={bg} text_cl={tcl}>
        <img src={img}></img>
        <h1>This is a cat</h1>
        {children}
    </RedCont>

    // return <div 
    // // style={{backgroundColor:"red"}}
    // >
    //     <img src={img}></img>
    //     <h1>This is a cat</h1>
    // </div>
}