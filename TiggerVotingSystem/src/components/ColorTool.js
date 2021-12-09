import { ColorList } from './ColorList.js';
import { ColorForm } from './ColorForm';
//import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';
import { useColorToolStore } from '../hooks/useColorToolStore';

export const ColorTool = () =>{
    
    //const store = useColorToolStoreContext();
    const store = useColorToolStore();
    return(
        <>
            <ColorList colors={store.colors} onDeleteColor={store.deleteColor}/>
            <ColorForm
                addColorButtonText="Add Color" 
                onSubmitColor={store.addColor}
            />
            <button type="button" onClick={store.sortColor}>Current Sort : {store.colorsSort.sortCol} - {store.colorsSort.sortDir}</button>
        </>
    )
};

ColorTool.defaultProps = {
    colors: [],
}