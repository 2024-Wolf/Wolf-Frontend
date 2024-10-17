import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

import { CommonButton, NoBackground, fontColorHover, Violet500LineButton } from "../GlobalStyledComponents";


import InputFile from '../Input/InputFile';
import CancelIcon from '../Icon/CancelIcon';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const Image = styled.img`
    object-fit: cover;
    max-width: 100%;
    max-height: 150px;
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
    padding: 40px;
    z-index: 1000;
    flex-direction: column;
    color: var(--black300);
    gap: 5px;
`;

const ImagePlaceholder = styled.div`
    display: ${(props) => (props.hasImage ? 'flex' : 'none')};
    flex-direction: row;
    align-items: start;
    gap: 10px;
    margin: 0 20px;

    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    justify-content: end;
    gap: 5px;
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: end;
    align-items: start;
    gap: 10px;


    overflow: hidden;
    text-overflow: ellipsis;
    flex-direction: row;
    @media (max-width: 768px) {

    }

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        align-items: end;
    }

`;


// components/Group/Question/QuestionItem.jsx
export const ActionButtons = styled.div`

    display: flex;
    justify-content: flex-end;
    gap: 10px;
    
    
    button {
        background-color: white;
    }

    label {
        cursor: pointer;
        color: var(--black500);
        font-size: 14px;
    }
`;

// components/Group/Question/QuestionItem.jsx
export const ProfileImgEditButton = styled.div`
    position: absolute;
    label {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        aligin-items: center;

        &:hover, &:active  {
            background-color: rgba(0, 0, 0, 0.05);
            color: var(--black600);
            transition: background-color 0.3s ease, color 0.3s ease, display 0.3s ease, color 0.3s ease;
            svg { 
                color: var(--black600);
                display: block;
            }
        }
        
        svg {
            color: transparent;
            height: 120px; 
            display: none;
        }
    }
`;

export const ModalOverlayImg = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
`;



const ImagePreview = (({
    children,
    src,
    alt,
    onChange,
    onClick,
    className = "InputFileImage",
    style,
    isEditing = false,
    isNoCssUploadButtonAppear,
    isUploadButtonAppear,
    isSubmitButtonAppear,
    imageFile,
    questionId,
    imgStyle,
    ProfileImgStyle,
    ImagePlaceholderStyle,
    ProfileImgPlaceholderStyle,
    ModalOverlayImgStyle,
    isProfileImgEditButtonAppear,
    defaultImgSrc,
    ...props // 나머지 props
}
) => {

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState([] || imageFile);
    const [modalImage, setModalImage] = useState(null);
    const [hasImageFile, setHasImageFile] = useState(false || !!imageFile);

    useEffect(() => {
        document.body.style.overflow = isImageModalOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isImageModalOpen]);

    const handleInputFile = (e) => {
        // jpg,png,jpeg만 첨부 가능함
        const files = Array.from(e.target.files);

        const invalidFiles = files.filter(file => {
            const isJfif = file.name.toLowerCase().endsWith('.jfif');
            const isPjpeg = file.name.toLowerCase().endsWith('.pjpeg');
            const isPjp = file.name.toLowerCase().endsWith('.pjp');
            return !['image/jpeg', 'image/png'].includes(file.type) || isJfif || isPjpeg || isPjp;
        });
        // 형식 검사 후 맞지 않으면 저장하지 않음
        if (invalidFiles.length > 0) {
            alert('허용되지 않는 파일 형식입니다 (첨부 가능 형식: jpeg, jpg, png)');
            document.querySelectorAll('.InputFileImage').forEach(input => {
                input.value = ''; // 각 input의 value 초기화
            });
            return;
        }

        // 형식 검사 후 통과하면 저장함
        setSelectedImage(files);

        // onChange가 함수일 때만 호출
        if (onChange && typeof onChange === 'function') {
            onChange(e.target.files[0]);
        } else {
        }
    };


    const handleDeleteFile = (e) => {
        setHasImageFile(false);
        setSelectedImage([]); // 선택된 파일 초기화
        document.querySelectorAll('.InputFileImage').forEach(input => {
            input.value = ''; // 각 input의 value 초기화
        });

        // onClick가 함수일 때만 부모 함수 호출
        if (onClick && typeof onClick === 'function') {
            onClick();
        } else {
        }
    };

    const handleSubmitFile = () => {
        setHasImageFile(false);
        setSelectedImage([]); // 선택된 파일 초기화
        document.querySelectorAll('.InputFileImage').forEach(input => {
            input.value = ''; // 각 input의 value 초기화
        });
    };



    const handleImageClick = (image) => {

        // 이미지가 Blob/File인지 URL인지 확인
        if (typeof image === 'string') {
            // URL인 경우
            setModalImage(image);
        } else if (image instanceof Blob || image instanceof File) {
            // Blob/File인 경우
            setModalImage(URL.createObjectURL(image));
        }
        setIsImageModalOpen(true);
    };

    return (
        <>
            <ButtonRow style={style}>
                {/* 파일 미리보기 표시 */}
                {/* 조건부 렌더링: children이 없을 때만 렌더링 */}
                {!isNoCssUploadButtonAppear && (
                    <div style={{
                        display: 'flex',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        width: "100%",
                        justifyContent: 'end',
                        gap: "5px",
                    }}>
                        {src ? (
                            <ImagePlaceholder
                                style={ImagePlaceholderStyle}
                                hasImage={true}>
                                <Image
                                    style={imgStyle}
                                    src={src} // src는 미리 정의한 URL 또는 기본 이미지 URL
                                    alt={alt} // alt는 미리 정의한 설명
                                    onClick={() => { handleImageClick(imageFile) }} // 이미지 클릭 시 행동
                                />
                                {isEditing && ( // 편집 모드일 때만 삭제 아이콘 표시
                                    <CancelIcon onClick={() => handleDeleteFile()} />
                                )}
                            </ImagePlaceholder>
                        ) : (
                            (selectedImage && selectedImage.length > 0) ? selectedImage.map((file) => {
                                const fileURL = URL.createObjectURL(file);
                                return (
                                    <ImagePlaceholder
                                        style={ProfileImgPlaceholderStyle}
                                        key={file.name} hasImage={true}>
                                        <Image
                                            style={ProfileImgStyle}
                                            src={fileURL}
                                            alt={file.name} // 파일 이름을 alt로 사용
                                            onClick={() => { handleImageClick(file) }} // 이미지 클릭 시 행동
                                        />
                                        {isEditing && ( // 편집 모드일 때만 삭제 아이콘 표시
                                            <CancelIcon onClick={() => handleDeleteFile()} />
                                        )}
                                    </ImagePlaceholder>
                                );
                            }) : (<>
                                <ImagePlaceholder
                                    style={ProfileImgPlaceholderStyle}
                                    hasImage={true}>
                                    <Image
                                        style={ProfileImgStyle}
                                        src={defaultImgSrc}
                                        alt={'defaultImg'} // 파일 이름을 alt로 사용
                                    />
                                    {isEditing && ( // 편집 모드일 때만 삭제 아이콘 표시
                                        <CancelIcon onClick={() => handleDeleteFile()} />
                                    )}
                                </ImagePlaceholder>
                            </>)
                        )}
                        {/* 프로필 이미지 편집일 경우 */}
                        {isProfileImgEditButtonAppear &&
                            <>
                                <ProfileImgEditButton>
                                    <label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg>
                                        <input
                                            type="file"
                                            accept="image/jpeg, image/png"
                                            className={className}
                                            name="fileInput"
                                            onChange={handleInputFile}
                                            style={{ display: "none" }}
                                        />
                                    </label>
                                </ProfileImgEditButton>
                            </>
                        }
                        {/* 이미지 모달 */}
                        {isImageModalOpen && (
                            <>
                                <ModalOverlay onClick={() => setIsImageModalOpen(false)}>
                                    Click :  화면 종료
                                    <ModalOverlayImg
                                        style={ModalOverlayImgStyle}
                                        alt="확대된 이미지"
                                        src={modalImage}
                                    />
                                </ModalOverlay>
                            </>
                        )}

                    </div>
                )}

                {/* 파일 업로드 버튼 */}
                <div style={{
                    display: 'flex', gap: '10px', minHeigth: '35px',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    {/* 파일 업로드 버튼 */}
                    {isUploadButtonAppear &&
                        <InputFile
                            {...props}
                            className={className}
                            type="file"
                            name="InputFileImage"
                            accept="image/jpeg, image/png"
                            onChange={handleInputFile}
                        />}
                    {/* 등록 버튼 */}
                    {isSubmitButtonAppear &&
                        <Violet500LineButton type="submit" onClick={handleSubmitFile}>
                            등록
                        </Violet500LineButton>}
                    {/* 자식으로 들어온 버튼이 있을 경우 */}
                    {isNoCssUploadButtonAppear &&
                        <ActionButtons>
                            <label>
                                파일 선택&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                                </svg>
                                <input
                                    type="file"
                                    accept="image/jpeg, image/png"
                                    className={className}
                                    name="fileInput"
                                    onChange={handleInputFile}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </ActionButtons>
                    }
                </div>
            </ButtonRow>
        </>
    );
});

export default ImagePreview;