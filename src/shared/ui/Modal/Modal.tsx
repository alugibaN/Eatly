import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import cls from "./Modal.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import Portal from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(); // ReturnType

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const clouseHeandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                clouseHeandler();
            }
        },
        [clouseHeandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeydown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeydown);
        };
    }, [isOpen, onKeydown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={clouseHeandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
