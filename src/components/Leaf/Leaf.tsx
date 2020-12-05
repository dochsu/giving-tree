import { MouseEventHandler } from 'react';
import './Leaf.css';
import { Property } from 'csstype';

interface LeafProps {
    label?: string;
    background?: Property.Color;
    transform?: Property.Transform;
    position?: Property.Position;
    top?: Property.Top;
    bottom?: Property.Bottom;
    left?: Property.Left;
    right?: Property.Right;
    onClick?: MouseEventHandler;
}

const Leaf = (props: LeafProps) => {    
    const style = {        
        backgroundColor: props.background,
        transform: props.transform,
        position: props.position,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right
    };
    return (
        <div className="Leaf" style={style} onClick={props.onClick}>            
            <p className="Leaf-label">
                {props.label}
            </p>
        </div>
    );
}

export type { LeafProps };

export default Leaf;

