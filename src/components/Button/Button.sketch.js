// @flow
import * as React from 'react';
import { render, Artboard, Text, View, Image, makeSymbol } from 'react-sketchapp';

export const Button = () => (
    <View name="Button" style={{ width: 100, height: 100, backgroundColor: 'green' }}>
        <Text name="Button Text">Red Square</Text>
    </View>
);

export const ButtonSymbol = makeSymbol(Button, 'button/default');
