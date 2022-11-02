export default function TextInput(props) {
    // TODO: ADD NUMBER TYPE WITH VALIDATOR
    const {
        label = "LABEL_TEXT",
        placeholder = "PLACEHOLDER_TEXT",
        varName = "varName",
        icon,
        parentHandler
    } = props

    return (
        <div className="text-input">
            <label for="">{label}</label>
            <div className="input-container">
                <input
                    name={varName}
                    type="text"
                    placeholder={placeholder}
                    autocomplete="off"
                    onChange={e => parentHandler(e.currentTarget.value)}
                />
                <img src={icon} alt="" height="18" width="18" />
            </div>
        </div>
    )
}