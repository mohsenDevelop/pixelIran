import React from 'react'
import { Title, NotFound, List, ListItem, RenderButtons } from "./AllList";
import { useSelector } from "react-redux";

const TodoList = () => {

    const RenderTodoList = () => {

        const { todo } = useSelector((state) => state.lists);

        return (

            !!todo && todo.length ? (
                <List>
                    {
                        todo.map((i, index) =>
                            <ListItem key={i.id.toString() + (index * 11310).toString()} >
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
                        There Is No Todo Task
                    </NotFound>
                )



        )
    }
    return (
        <>
            <Title>Todo List : </Title>
            <RenderTodoList />

        </>
    )
}

export default TodoList;