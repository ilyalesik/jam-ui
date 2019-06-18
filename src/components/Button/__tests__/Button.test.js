import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";


describe("<Button />", () => {

    it("Button renders correctly", () => {
        const tree = renderer
        .create(
            <Button>Push Me</Button>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
