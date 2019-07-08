import * as React from "react";
import {Artboard, View, Text, render } from "react-sketchapp";

export const generate = (config) => {
    const Document = () => (
        <Artboard name="Jam UI">
            {Object.keys(config.sizing).map((key) => {
                const {name, size} = config.sizing[key];
                return <View name={name} style={{ marginBottom: 24, marginRight: 24 }}>
                    <View
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: "#be6700",
                        }}
                    />
                    <Text
                        style={{
                            color: '#333',
                            fontWeight: 'normal',
                            fontSize: 16,
                            lineHeight: 24,
                        }}
                    >
                        {name}
                    </Text>
                </View>
            })}
        </Artboard>

    );

    return () => {
        render(<Document />, context.document.currentPage());
    }

};
