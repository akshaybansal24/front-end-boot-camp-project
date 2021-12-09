const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ColorList = props => {
    return(
        <ul>
            { isEmpty(props.colors)
                ? <li>No Colors</li> : 
                props.colors.map(color => {
                        return(
                            <li key={color.id}>{color.id}&emsp;{color.name}&emsp;
                                <button type="button" onClick={() => props.onDeleteColor(color.id)} >Delete</button>
                            </li>
                        );
                    }
                
                )}
        </ul>
    );
};

ColorList.defaultProps = {
    colors: [],
}