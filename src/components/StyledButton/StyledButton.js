import {darken, lighten} from 'polished';
import styled, {css} from 'styled-components';

const colorStyle = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];

        return css`
            background: ${selected};

            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
			${(props) =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        color: white;
                        background: ${selected};
                    }
                `}}
        `;
    }}
`;

const sizes = {
    large: {
        height: 3,
        fontSize: 1.25,
    },
    medium: {
        height: 2.25,
        fontSize: 1,
    },
    small: {
        height: 1.75,
        fontSize: 0.875,
    },
};

const sizeStyle = css`
    ${({size}) =>
        css`
            height: ${sizes[size].height}rem;
            font-size: ${sizes[size].fontSize}rem;
        `}
`;

const fullWidthStyle = css`
    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
            justify-content: center;
            &:not(:first-child) {
                margin-left: 0;
                margin-top: 1rem;
            }
        `}
`;

const StyledButton = styled.button`
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    ${sizeStyle}

    ${colorStyle}

    &:not(:first-child) {
        margin-left: 1rem;
    }

    ${fullWidthStyle}
`;

const Button = ({children, color, size, outline, fullWidth, ...rest}) => {
    return (
        <StyledButton
            color={color}
            size={size}
            outline={outline}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;
