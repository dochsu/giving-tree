import React, { useState, ReactElement, MouseEvent } from 'react';
import Leaf, { LeafProps } from '../Leaf';
import './Tree.css';
import { Property } from 'csstype';

interface TreeProps {
    labels: string[]
    onSelected?: (label: string) => void
}

interface TrunkProps {
    top: Property.Top
    left: Property.Left
}

const LeafGreen = (props: LeafProps) =>
    <Leaf
        {...props}
        position='absolute'
        background='#6EA061'
        />;

const LeafBrown = (props: LeafProps) =>
    <Leaf
        {...props}
        position='absolute'
        background='#BC833C'
        />;

const LeafRed = (props: LeafProps) =>
    <Leaf
        {...props}
        position='absolute'
        background='#FEA772'
        />;

const LeafYellow = (props: LeafProps) =>
    <Leaf
        {...props}
        position='absolute'
        background='#FEDB7F'
        />;

const Trunk = (props: TrunkProps) => 
    <div className="Trunk" style={{
        top: props.top,
        left: props.left,
        transform: "scaleX(1.2) scaleY(3.0)"
    }} />;

const buildLeaves = () => {
    let buffer: ReactElement<LeafProps, typeof Leaf>[] = [];
    buffer.push(
        <LeafBrown        
            top='40px'
            left='250px'
            transform='rotate(110deg) scale(1.4)'        
        />
    );
    buffer.push(
        <LeafGreen
            top='40px'
            left='390px'
            transform='rotate(-10deg) scale(1.4)'
            />
    );
    buffer.push(
        <LeafYellow
            top='110px'
            left='490px'
            transform='rotate(20deg) scale(1.5)'
            />
    );
    buffer.push(
        <LeafYellow
            top='110px'
            left='490px'
            transform='rotate(20deg) scale(1.5)'
            />
    );
    buffer.push(
        <LeafGreen
            top='220px'
            left='540px'
            transform='rotate(30deg) scale(1.6)'
            />
    );
    buffer.push(
        <LeafRed
            top='290px'
            left='650px'
            transform='rotate(46deg)'
            />
    );
    buffer.push(
        <LeafBrown
            top='360px'
            left='540px'
            transform='rotate(55deg) scale(1.6)'
            />
    );
    buffer.push(
        <LeafGreen
            top='450px'
            left='420px'
            transform='rotate(80deg) scale(1.4)'
            />
    );
    buffer.push(
        <LeafGreen
            top='450px'
            left='210px'
            transform='rotate(20deg) scale(1.4)'
            />
    );
    buffer.push(
        <LeafYellow
            top='380px'
            left='90px'
            transform='rotate(50deg) scale(1.2)'
            />
    );
    buffer.push(
        <LeafGreen
            top='275px'
            left='15px'
            transform='rotate(40deg) scale(0.9)'
            />
    );
    buffer.push(
        <LeafGreen
            top='170px'
            left='60px'
            transform='rotate(70deg) scale(1.5)'
            />
    );
    buffer.push(
        <LeafRed
            top='100px'
            left='150px'
            transform='rotate(90deg) scale(1.4)'
            />
    );
    buffer.push(
        <LeafGreen
            top='170px'
            left='330px'
            transform='rotate(10deg) scale(0.9)'
            />
    );
    buffer.push(
        <LeafRed
            top='250px'
            left='380px'
            transform='rotate(-45deg) scale(0.95)'
            />
    );
    buffer.push(
        <LeafBrown
            top='350px'
            left='300px'
            transform='rotate(45deg) scale(1.4)'
            />
    );
    buffer.push(
        <LeafRed
            top='300px'
            left='160px'
            transform='rotate(45deg) scale(1.2)'
            />
    );
    buffer.push(
        <LeafYellow
            top='240px'
            left='250px'
            transform='rotate(70deg) scale(1.0)'
            />
    );
    return buffer;
}
    
const Tree = (props: TreeProps) => {    
    const handleClick = (e: MouseEvent, label: string) => {
        e.preventDefault();
        if (props.onSelected) {
            props.onSelected(label);
        }
    };
    
    const [leaves] = useState(buildLeaves());
    const labels = props.labels.slice(0, leaves.length);
    const labeledLeaves = labels.map((l, i) => {
        const element = React.cloneElement(leaves[i], {
            key: i,
            label: l,
            onClick: (e: MouseEvent) => handleClick(e, l),
        });
        return element;
    });

    return (
        <div className="Container">
            <div className="Tree">
                {labeledLeaves}

                <Trunk
                    top='580px'
                    left='320px'
                    />
            </div>
        </div>
    );
}

export default Tree;