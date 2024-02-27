import { ReactNode } from "react";

type Syllabus = {
  name?: string;
  code?: string;
  date?: string;
  author?: string;
  durations?: string;
  standard?: ReactNode;
  status?: number;
};

export default Syllabus;
