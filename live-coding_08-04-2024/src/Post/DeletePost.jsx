const deletePost = function({deleted,i}){

    return (
        <div style={{float: "left"}}>
            <button style={{height: "120px"}} onClick={() => deleted(i)} >sup</button>
        </div>
    );
}

export default deletePost;