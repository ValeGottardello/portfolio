import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

export default function Arrow(props) {
    return (
        <a href={props.page} className="arrow">
            <MdKeyboardDoubleArrowDown/>
        </a>      
    )
}