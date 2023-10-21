import React from 'react';
interface StudentInfo {
  name: string;
  grade: number;
  part?: string; //있어도 되고 없어도 되는 props
  handleClick: (name: string, grade: number) => void;
}
// 타입도 가능!
// type StudentInfo = {
//   name: string;
//   grade: number;
// };
// export default function Student({ name, grade }: StudentInfo) {
//   return <div>Students</div>;
// }

// FC:functional component
// React.FC를 사용할 떄는 Generic을 이요해서 props타입을 표현
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <ul>
//         <li>이름:{name}</li>
//         <li>학년:{grade}</li>
//       </ul>
//     </div>
//   );
// };
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <ul>
        <li>이름:{name}</li>
        <li>학년:{grade}</li>
        <li>전공:{part || '자유전공'}</li>
      </ul>
    </div>
  );
};
export default Student;
