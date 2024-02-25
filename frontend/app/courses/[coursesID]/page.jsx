"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourse } from "@/components/api/register";
import CourseDetails from "../../../components/CourseDetails/CourseDetails";
function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const id = pathSegments[pathSegments.length - 1];
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourse(id);
        setCourse(response.data);
      } catch (error) {
        console.error("Помилка при отриманні даних", error);
      }
    };

    fetchCourse();
  }, []);

  return (
    <>
      <CourseDetails course={course} />
    </>
  );
}

export default Page;
