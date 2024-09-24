import {Route, Routes} from "react-router-dom";
import Header from "../components/Header";
import StudyInfo from "./StudyInfo";
import MeetingPage from "../components/MeetingTab";
import FAQ from "./FAQ";
import TeamRecruit from "./TeamRecruit";
import Footer from "../components/Footer";
import React from "react";

const StudyPage = () => {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<StudyInfo />} />  {/* 스터디 기본 페이지 */}
                    <Route path="/meeting" element={<MeetingPage />} />  {/* 화상회의 화면 */}
                    <Route path="/faq" element={<FAQ />} />     {/* FAQ 페이지 */}
                    <Route path='/post' element={<TeamRecruit />} />
                </Routes>
            </div>
            <Footer />
        </>

    );
};


export default StudyPage;