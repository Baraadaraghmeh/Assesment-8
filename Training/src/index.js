import react from 'react';
import ReactDom from 'react-dom';
import {Stu1,Stu2,Age} from './student.jsx'
import stu1 from './src/student.jsx';
ReactDom.render(<div>
    <stu1/>
    <stu2/>
</div>,document.getElementById("root"))