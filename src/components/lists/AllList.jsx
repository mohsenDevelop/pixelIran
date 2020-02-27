import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deletingList } from "../../redux/actions/deleteList";



const AllList = () => {
    const { tasks } = useSelector((state) => state.lists);
    const dispatch = useDispatch();

    const RenderButtons = ({ id }) => {
        console.log("id", id);

        const handleDelete = () => {
            dispatch(deletingList(id))
        }
        return (
            <div style={{ display: "flex" }}>
                <ButtonCancel onClick={handleDelete}>Delete</ButtonCancel>
                <ButtonEdit>Edit</ButtonEdit>
                <ButtonMark>Mark</ButtonMark>
            </div>
        );
    }

    const RenderAddList = () => {

        if (!!tasks && tasks.length) {
            return (
                <List>
                    {
                        tasks.map(i =>
                            <ListItem key={i.id.toString()} >
                                <span>{i.content}</span>
                                <RenderButtons id={i.id} />
                            </ListItem>
                        )
                    }
                </List>
            )
        }
    }

    return (
        <>
            <Title>All List : </Title>
            {
                RenderAddList()
            }

        </>
    )
}

export default AllList;

const Title = styled('p')`
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
`;

const List = styled('ul')`
   list-style : none;
   margin: 0px;
   padding: 0px;
`;

const ListItem = styled('li')`
   height: 50px;
   border: 1px solid #DFDFDF;
   background-color: #DFDFDF;
   border-radius: 10px;
   width: 70%;
   padding-left: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;

`;

const ButtonCancel = styled('button')`
border: 1px solid #ED1C24;
width: auto;
border-radius: 10px;
height: 30px;
background-color: #fff;
color: #ED1C24;
cursor: pointer;
outline: none;
border: unset;
box-shadow: unset;
display: flex;
align-items: center;
margin-right: 10px;

&:hover {
    border: 1px solid #BE0007;
    color: #BE0007;
}
&:active {
    border: 1px solid #840004;
    color: #840004;
}
`;

const ButtonEdit = styled('button')`
border: 1px solid #00BE43;
width: auto;
border-radius: 10px;
height: 30px;
background-color: #fff;
color: #00BE43;
cursor: pointer;
outline: none;
border: unset;
box-shadow: unset;
display: flex;
align-items: center;
margin-right: 10px;
&:hover {
    border: 1px solid #00872F;
    color: #00872F ;
}
&:active {
    border: 1px solid #005E21;
    color: #005E21;
}
`;


const ButtonMark = styled('button')`

border: 1px solid#001A34;
width: auto;
border-radius: 10px;
height: 30px;
background-color: #fff;
color: #001A34;
cursor: pointer;
outline: none;
border: unset;
box-shadow: unset;
display: flex;
align-items: center;
margin-right: 10px;
&:hover {
    border: 1px solid #000000;
    color: #000000 ;
}
&:active {
    border: 1px solid #000000;
    color: #000000;
}
`;


