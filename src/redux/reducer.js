const initialState = { counter: 0, helloMessage: "", isVisible: true };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, counter: state.counter + 1 };
        case "DEC":
            return { ...state, counter: state.counter - 1 };
        case "RUS":
            return { ...state, helloMessage: "Привет Мир" };
        case "ENG":
            return { ...state, helloMessage: "Hello World" };
        case "VIS":
            return { ...state, isVisible: !state.isVisible };
        default:
            return state;
    }
};