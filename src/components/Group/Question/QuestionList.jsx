import React from 'react';
import QuestionItem from './QuestionItem';

import { Hr } from "../../GlobalStyledComponents";


const QuestionList = ({
    questions,
    selectedQuestionId,
    toggleComments,
    renderComments,
    handleFileChange,
    handleQuestionEdit,
    handleQuestionDelete,
    showFileOptions = true
}) => {
    return (
        <>
            {questions ? (
                <>
                    <Hr />
                    {questions.map((question) => (
                        <>
                            <QuestionItem
                                key={question.id}
                                question={question}
                                selectedQuestionId={selectedQuestionId}
                                toggleComments={toggleComments}
                                renderComments={renderComments}
                                handleFileChange={handleFileChange}
                                handleQuestionEdit={handleQuestionEdit}
                                handleQuestionDelete={handleQuestionDelete}
                                showFileOptions={showFileOptions}
                            />
                            <Hr />
                        </>
                    ))}
                </>
            ) : null}
        </>
    );
};

export default QuestionList;
