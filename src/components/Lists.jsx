import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from 'prop-types';
import AllList from "./AllList";
import TodoList from "./TodoList";
import MarkList from "./MarkList";
import { addingTask } from "../redux/actions/addTask";
import { updateList } from "../redux/actions/update";


const Lists = props => {

    const [value, setValue] = useState("");
    const [changeBtn, setChangeBtn] = useState(false);
    const dispatch = useDispatch();
    const { selectedList } = useSelector((state) => state.lists);

    const inputID = useRef();

    useEffect(() => {
        setValue(selectedList && selectedList.content);
        setChangeBtn(selectedList && selectedList.content ? false : true);
    }, [selectedList])

    const handleChange = (event) => {
        setValue(event.target.value);

    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!!value && value.length && inputID && inputID.current && inputID.current.id && inputID.current.id.toString().trim() === "textInput") {
            dispatch(addingTask(value));
            setValue("");
            setChangeBtn(false)
        }

        if (!!value && value.length && selectedList && selectedList.id && inputID && inputID.current && inputID.current.id && inputID.current.id === selectedList.id) {
            dispatch(updateList(selectedList.id, value));
            setValue("");
            setChangeBtn(true)
        }
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input ref={inputID} id={selectedList && selectedList.content ? selectedList.id : "textInput"} name={"content"} value={value} onChange={handleChange} placeholder={"typing ..."} />
                {
                    <ButtonAdd type={"submit"} >
                        {
                            selectedList && selectedList.content && !changeBtn ? "Edit" : "Submit"
                        }
                    </ButtonAdd>
                }

            </Form>

            <AllList />
            <TodoList />
            <MarkList />


        </>
    )
}

Lists.propTypes = {

}

export default Lists;



const Input = styled('input')`
border: 1px solid #A9A9A9;
width: 50%;
border-radius: 10px;
height: 46px;
padding-right: 34px;
padding-left: 34px;
font-size: 15px;
margin-right: 10px;
outline: none;
&:focus {
    outline: unset;
    border: 1px solid #003468;
    box-shadow: 0 0 0 3px #E6F3FF;
}

&::placeholder {
    color: #A9A9A9;
    padding-left: 4px;
  }
    
`;

const ButtonAdd = styled('button')`
border: 1px solid #0069D1;
width: 120px;
border-radius: 10px;
height: 46px;
background-color: #fff;
color: #0069D1;
cursor: pointer;
outline: none;
&:hover {
    border: 1px solid #004B97;
    color: #004B97;
}
&:active {
    border: 1px solid #003468;
    color: #003468;
}
`;

const Form = styled('form')`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   justify-content: flex-start;
`;

