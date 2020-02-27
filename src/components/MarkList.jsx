import React from 'react'
import { Title, NotFound, List, ListItem, RenderButtons } from "./AllList";
import { useSelector } from "react-redux";


const MarkList = () => {

    const RenderMarkedList = () => {

        const { marked } = useSelector((state) => state.lists);

        return (

            !!marked && marked.length ? (
                <List>
                    {
                        marked.map((i, index) =>
                            <ListItem key={i.id.toString() + (index * 131).toString()} >
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
                        There Is No marked Task
                    </NotFound>
                )



        )
    }

    return (
        <>
            <Title>Completed List : </Title>
            <RenderMarkedList />
        </>
    )
}

export default MarkList;