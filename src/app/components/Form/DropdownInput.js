import { useEffect, useRef, useState } from "react"

export default function DropdownInput(props) {
    let {
        type = "normal",
        label = "LABEL_TEXT",
        placeholder = "PLACEHOLDER_TEXT",
        varName = "var",
        option = {
            key: "value",
            key2: "value2"
        },
        parentHandler
    } = props
    const inputRef = useRef(null)
    const [optionVis, setOptionVis] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder);
    const [dropdownWidth, setDropdownWidth] = useState(200);

    const showOption = () => {
        setOptionVis(!optionVis)
    }
    const optionCLickHandler = (e) => {
        const value = e.currentTarget.children[1].innerHTML
        e.currentTarget.children[0].checked = true

        parentHandler(e.currentTarget.children[0].value)
        setSelectedOption((type === "time") ? value + " WIB" : value)
        setOptionVis(false)
    }

    const appendElement = []
    if (type === "time") {
        Object.keys(option).forEach(function (key, _) {
            appendElement.push(
                <li onClick={optionCLickHandler}>
                    <input type="radio" name={varName} id={key} value={key} />
                    <label htmlFor={key}>{option[key]}</label>
                    <span>WIB</span>
                </li>
            )
        });
    } else {
        Object.keys(option).forEach(function (key, _) {
            appendElement.push(
                <li onClick={optionCLickHandler}>
                    <input type="radio" name={varName} id={key} value={key} />
                    <label htmlFor={key}>{option[key]}</label>
                </li>
            )
        });
    }
    const optionList = (
        <ul className={`select-dropdown ${(type === "time") ? "pickup-time-list" : ""}`} style={{ width: dropdownWidth + "px" }}>
            {appendElement}
        </ul>
    )

    useEffect(() => {
        setDropdownWidth(inputRef.current.offsetWidth)
    }, [])

    useEffect(() => {
        window.onresize = () => {
            setDropdownWidth(inputRef.current.offsetWidth)
        }
    })

    return (
        <div ref={inputRef} className="select-input">
            <label>{label}</label>
            <button type="button" className="select-btn input-container" onClick={showOption}>
                <span>{selectedOption}</span>
                <img src="/img/form-arrow-down.svg" alt="" height="18" width="18" className={(optionVis) ? "active" : ""} />
            </button>
            {(optionVis) ? optionList : ""}
        </div>
    )
}