import React, { useRef, useState, useContext, ReactNode, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

interface ModalContextProps {
    modalRef: React.RefObject<HTMLDivElement>;
    modalContent: ReactElement | null;
    setModalContent: (content: ReactElement | null) => void;
    setOnModalClose: (callback: (() => void) | null) => void;
    closeModal: () => void;
}

const ModalContext = React.createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [modalContent, setModalContent] = useState<ReactElement | null>(null);
    const [onModalClose, setOnModalClose] = useState<(() => void) | null>(null);

    const closeModal = () => {
        setModalContent(null);
        if (typeof onModalClose === 'function') {
            setOnModalClose(null);
            onModalClose();
        }
    };

    const contextValue: ModalContextProps = {
        modalRef,
        modalContent,
        setModalContent,
        setOnModalClose,
        closeModal
    };

    return (
        <>
            <ModalContext.Provider value={contextValue}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function Modal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('Modal must be used within a ModalProvider');
    }

    const { modalRef, modalContent, closeModal } = context;

    if (!modalRef.current || !modalContent) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={closeModal} />
            <div id="modal-content">
                {modalContent}
            </div>
        </div>,
        modalRef.current
    );
}

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
