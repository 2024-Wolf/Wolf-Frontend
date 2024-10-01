import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import MeetingWindow from './MeetingWindow';

const MeetingPortal = ({ onClose }) => {
  const meetingWindowRef = useRef(null);

  useEffect(() => {

    const meetingWindow = window.open(
      '',
      '_blank',
      'width=800,height=600,resizable,scrollbars=yes,status=1'
    );

    meetingWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>화상회의</title>
        </head>
        <body>
          <div id="meeting-root"></div>
        </body>
      </html>
    `);
    meetingWindow.document.close();

    // React 포털을 사용하여 새 창에 MeetingWindow 컴포넌트 렌더링
    const rootElement = meetingWindow.document.getElementById('meeting-root');
    meetingWindowRef.current = meetingWindow;

    ReactDOM.render(<MeetingWindow />, rootElement);

    // 창 닫힘 이벤트 처리
    const handleWindowClose = () => {
      if (onClose) {
        onClose(); // 부모 컴포넌트의 onClose 콜백 호출
      }
    };

    meetingWindow.addEventListener('beforeunload', handleWindowClose);

    return () => {
      meetingWindow.removeEventListener('beforeunload', handleWindowClose);
      meetingWindow.close();
    };
  }, [onClose]);

  return null;
};

export default MeetingPortal;
