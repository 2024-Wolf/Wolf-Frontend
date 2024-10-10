import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
    object-fit: cover;
    max-width: 100%;
    max-height: 214px;
    border: 1.5px solid var(--black200);
    border-radius: 10px;
    cursor: pointer;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px;
    z-index: 1000;
`;

const CancelIcon = styled.button`
    background-color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const ImagePlaceholder = styled.div`
    display: ${(props) => (props.hasFiles ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 90%;
    gap: 10px;
    margin: 0 20px;
`;

const ImagePreview = ({ images, isImageModal, ...props }) => {
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);


    useEffect(() => {
        if (isImageModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isImageModalOpen]);

    return (
        <>
            <ImagePlaceholder hasFiles={images.length > 0}>
                {images.map((image, index) => {
                    return (
                        <> {/* 고유한 key 사용 */}
                            <ImagePreview {...props} key={image.name} src={URL.createObjectURL(image)} alt={`preview-${index}`} />
                            <CancelIcon onClick={() => handleDeleteFile()} />
                        </>
                    );
                })}
            </ImagePlaceholder>
            {isImageModalOpen && (
                <ModalOverlay>
                    <img
                        alt="확대된 이미지"
                        style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '10px' }}
                    />
                    <CancelIcon onClick={() => setIsImageModalOpen(false)} />
                </ModalOverlay>
            )}
        </>
    );
};

export default ImagePreview;
