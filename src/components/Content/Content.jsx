import { Routes, Route } from 'react-router-dom';

// pages
import ProjectInfo from '../../pages/ProjectInfo/ProjectInfo';
import ConstructionWorks from '../../pages/ConstructionWorks/ConstructionWorks';
import ProjectDesigns from '../../pages/ProjectDesigns/ProjectDesigns';
import WorkProgram from '../../pages/WorkProgram/WorkProgram';
import Requirements from '../../pages/Requirements/Requirements';
import ProjectStakeholders from '../../pages/ProjectStakeholders/ProjectStakeholders';
import News from '../../pages/News/News';
import ContactUs from '../../pages/ContactUs/ContactUs';

import styles from './Content.module.css';

function Content() {
    return (
        <main className={styles.main_content}>
            <Routes>
                <Route path='/' element={<ProjectInfo />} />
                <Route path='/construction_works' element={<ConstructionWorks />} />
                <Route path='/project_designs' element={<ProjectDesigns />} />
                <Route path='/work_program' element={<WorkProgram />} />
                <Route path='/requirements' element={<Requirements />} />
                <Route path='/project_stakeholders' element={<ProjectStakeholders />} />
                <Route path='/news' element={<News />} />
                <Route path='/contact_us' element={<ContactUs />} />
            </Routes>
        </main>
    );
};

export default Content;