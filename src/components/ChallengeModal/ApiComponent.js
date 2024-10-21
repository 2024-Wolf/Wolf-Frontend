import React, { useState } from 'react';

const ApiComponent = () => {
    const [reqtInstCode, setReqtInstCode] = useState('');
    const [reqtUserName, setReqtUserName] = useState('');
    const [ctftNo, setCtftNo] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = new URLSearchParams();
        requestData.append('reqtInstCode', reqtInstCode);
        requestData.append('reqtUserName', reqtUserName);
        requestData.append('ctftNo', ctftNo);

        try {
            const response = await fetch('http://localhost:8080/https://www.gov.kr/mw/NisCertificateConfirmExecute.do', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: requestData.toString(),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            setResponseData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResponseData(null);
        }
    };

    return (
        <div>
            <h1>신청하기</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>요청 기관 코드:</label>
                    <input
                        type="text"
                        value={reqtInstCode}
                        onChange={(e) => setReqtInstCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>요청 사용자 이름:</label>
                    <input
                        type="text"
                        value={reqtUserName}
                        onChange={(e) => setReqtUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>증명서 번호:</label>
                    <input
                        type="text"
                        value={ctftNo}
                        onChange={(e) => setCtftNo(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">신청하기</button>
            </form>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {responseData && (
                <div>
                    <h2>응답 결과:</h2>
                    <pre>{responseData}</pre>
                </div>
            )}
        </div>
    );
};

export default ApiComponent;
