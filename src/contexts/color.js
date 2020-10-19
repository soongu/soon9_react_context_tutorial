import React, {createContext, useState} from "react";

//새 컨텍스트를 만들 때는 createContext함수를 사용하며. 파라미터에는 기본상태를 지정함.
const ColorContext = createContext({
    state: { color: 'black', subColor: 'red' },
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubColor] = useState('red');

    const value = {
        state: { color, subColor },
        actions: { setColor, setSubColor }
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;