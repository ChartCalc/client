import {purple} from "../../utils/constants";

export const selectStyles = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: purple,
        backgroundColor: purple,
        borderRadius: '15px',
        height: '50px',
        widths:'360px'
    }),
    input: (baseStyles, state) => ({
        ...baseStyles,
        color: "white",
        fontFamily: '\'Sulphur Point\', sans-serif',
        fontSize: '1.4em'
    }),
    singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: "white",
        fontFamily: '\'Sulphur Point\', sans-serif',
        fontSize: '1.4em',

    }),
    placeholder: (baseStyles, state) => ({
        ...baseStyles,
        color: "#dcdcdc",
        fontFamily: '\'Sulphur Point\', sans-serif',
        fontSize: '1.4em',

    })
}