import React, { useState } from 'react';
import axios from 'axios';

const ProfileImage = () => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('profileImage', image);

        try {
            const response = await axios.post('/api/upload', formData);
            console.log('Image uploaded:', response.data);
            // 이미지 URL을 상태나 데이터베이스에 저장하는 로직 추가
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleReset = () => {
        setImage(null);
        setImagePreview(null);
        // 서버에 초기화 요청을 보내는 로직 추가 (필요시)
    };

    return (
        <div>
            <h2>프로필 이미지 등록/수정</h2>
            {imagePreview ? (
                <img src={imagePreview} alt="Profile Preview" width="200" />
            ) : (
                <p>이미지를 선택하세요.</p>
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div>
                <button onClick={handleUpload}>등록/수정</button>
                <button onClick={handleReset}>초기화</button>
            </div>
        </div>
    );
};

export default ProfileImage;
