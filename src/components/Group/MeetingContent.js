import styled from 'styled-components';
import { MeetingContainer2, MeetingHeader, StartMeetingButton, MeetingDiv } from "../GlobalStyledComponents";

import React, { useState } from 'react';
import CommentSection from "./Question/CommentSection";
import QuestionForm from "./Question/QuestionForm";
import MeetingPortal from "./MeetingComponent/MeetingPortal";
import FormFieldSingle from "./GroupComponent/FormFieldSingle";

const MeetingContent = ({ isMeetingStarted, groupPostId, userId }) => {

  const [isMeetingOpen, setIsMeetingOpen] = useState(isMeetingStarted);
  const openMeetingWindow = () => {
    setIsMeetingOpen(true);
  };

  const closeMeetingWindow = () => {
    setIsMeetingOpen(false);
  };

  console.log(isMeetingStarted, groupPostId, userId)



  return (
    <MeetingContainer2>
      {/*미팅 버튼 */}
      <MeetingDiv>
        <StartMeetingButton onClick={openMeetingWindow}>
          화상회의 하기
        </StartMeetingButton>
        {isMeetingOpen && <MeetingPortal onClose={closeMeetingWindow} />}
      </MeetingDiv>

      <FormFieldSingle
        FormLabelGroupStyle={{ width: '100%', marginTop: '0px' }}
        labelStyle={{
          width: '100%', textWrap: 'wrap', justifyContent: 'start',

        }}
        label={"팀원들과 궁금한 내용을 나눠보세요 !"} />
      <QuestionForm
        userId={userId}
        showFileOption={true}
        groupPostId={groupPostId}
      />
    </MeetingContainer2>
  );
};

export default MeetingContent;
