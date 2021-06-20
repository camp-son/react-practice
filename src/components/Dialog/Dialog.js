import {useEffect, useState} from 'react';
import styled, {keyframes, css} from 'styled-components';
import Button from '../StyledButton/StyledButton';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

const slideUp = keyframes`
	from {
		transform: translateY(200px);
	}
	to {
		transform: translageY(0);
	}
`;

const slideDown = keyframes`
	from {
		transform: translateY(0);
	}
	to {
		transform: translageY(200px);
	}
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${(props) =>
        props.disappear &&
        css`
            animation-name: ${fadeOut};
        `}
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;

    h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${(props) =>
        props.disappear &&
        css`
            animation-name: ${slideDown};
        `}
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
    &:not(:first-child) {
        margin-left: 0.5rem;
    }
`;

const Dialog = ({
    children,
    title,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    visible,
}) => {
    const [animate, setAnimate] = useState(false);
    const [localeVisible, setLocaleVisible] = useState(visible);

    useEffect(() => {
        if (localeVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocaleVisible(visible);
    }, [localeVisible, visible]);

    if (!animate && !localeVisible) return null;

    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onCancel}>
                        {cancelText}
                    </ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>
                        {confirmText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
};

Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소',
};

export default Dialog;
