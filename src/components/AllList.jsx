import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deletingList } from "../redux/actions/deleteList";
import { marketingList } from "../redux/actions/marked";
import { selectedList } from "../redux/actions/update";



export const RenderButtons = ({ id, item }) => {
    const dispatch = useDispatch();


    const handleDelete = () => {
        dispatch(deletingList(id))
    }

    const handleMarked = () => {
        dispatch(marketingList(id))
    }

    const handleEdit = () => {
        dispatch(selectedList(item))
    }

    return (
        <div style={{ display: "flex" }}>
            <ButtonCancel onClick={handleDelete}>Delete</ButtonCancel>
            <ButtonEdit onClick={handleEdit}>Edit</ButtonEdit>
            <ButtonMark onClick={handleMarked}>Mark</ButtonMark>
        </div>
    );
}



const AllList = () => {

    const RenderAddList = () => {

        const { tasks } = useSelector((state) => state.lists);

        return (

            !!tasks && tasks.length ? (
                <List>
                    {
                        tasks.map((i, index) =>
                            <ListItem key={i.id.toString() + (index * 11211).toString()} >
                                <span>{i.content}</span>
                                <RenderButtons id={i.id} item={i} />
                            </ListItem>
                        )
                    }
                </List>
            )
                :
                (
                    <NotFound>
                        There Is No Task
                    </NotFound>
                )



        )
    }

    return (
        <>
            <Title>All List : </Title>

            <RenderAddList />


        </>
    )
}

export default AllList;

export const Title = styled('p')`
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
`;

export const List = styled('ul')`
   list-style : none;
   margin: 0px;
   padding: 0px;
`;

export const ListItem = styled('li')`
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


export const NotFound = styled('div')`
    height: 30px;
    background-color: #E6F3FF;
    border-radius: 10px;
    color: #0069D1;
    display: flex;
    padding: 5px 10px;
    align-items: center;
    font-size: 15px;
    width: 50%;
`;


