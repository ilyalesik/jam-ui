Basic button:

```jsx
<Button>Push Me</Button>
```

With theme:

```jsx
import {ThemeProvider} from "../../utils/ThemeProvider";
<ThemeProvider options={{color: "#ff0000"}}>
    <Button>Push Me</Button>
</ThemeProvider>

```

Override styles: 

```jsx
import styled, { css, style } from "reshadow";

const StyledButton = ({...props}) => styled`
  button {
    width: 400px;
  }
`(<Button {...props} {...styled} />)

;<StyledButton>Push Me</StyledButton>
```

