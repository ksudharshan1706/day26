import { useContext } from "react";
import { crtContext } from "./App";

export default function Mentors() {
  const [students, setstudents, mentors, setMentor] = useContext(crtContext);
  console.log(mentors);
  return <div className="Mentors"></div>;
}
