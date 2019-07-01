// @flow
import * as React from "react";
import * as PropTypes from "prop-types";
import {render, View, Artboard} from "react-sketchapp";
import {Button, ButtonSymbol} from "./components/Button/Button.sketch";

const Document = () => (
    <Artboard name="Jam UI">
        <ButtonSymbol />
    </Artboard>

);

Document.propTypes = {};

export default () => {
    render(<Document />, context.document.currentPage());
};
