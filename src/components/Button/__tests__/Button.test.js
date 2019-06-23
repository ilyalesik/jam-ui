import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";
import {getStyles} from 'reshadow'

describe("<Button />", () => {

    it("Button renders correctly", () => {
        const tree = renderer
        .create(
            <Button>Push Me</Button>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
        expect(getStyles().css).toMatchSnapshot();
    });
});
