import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 16px;
        background: #3B82F6;
        min-width: 185px;
        color: white;
        border-radius: 24px;
        &:hover {
            background: #3B82F6;
            opacity: 0.8;
        }
        &:active {
            background: #152842;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;