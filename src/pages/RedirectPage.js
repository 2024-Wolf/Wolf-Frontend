// RedirectPage.js
import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // URL의 hash에서 id_token을 추출
    const params = new URLSearchParams(window.location.hash.substring(1));
    const idToken = params.get("id_token");

    if (idToken) {
      // 부모 창에 id_token을 전달
      window.opener.postMessage({ type: 'id-token', idToken }, window.origin);
      // 팝업 창 닫기
      window.close();
    }
  }, []);

  return null; // 빈 페이지
};

export default RedirectPage;