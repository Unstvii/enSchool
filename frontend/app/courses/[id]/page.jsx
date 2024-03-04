"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourse } from "@/components/api/course";
import CourseDetails from "../../../components/CourseDetails/CourseDetails";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import CustomCarouselData from "../../../components/CustomCarousel/CustomCarouselData";
import { EverythingYouCanData } from "@/components/EverythingYouCan/EverythingYouCanData";
import EverythingYouCan from "@/components/EverythingYouCan/EverythingYouCan";
import TopEducation from "@/components/TopEducation/TopEducation";
import { TopEducationData } from "@/components/TopEducation/TopEducationData";
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
      <CustomCarousel
        title="Marketing Articles"
        link="#"
        background="rgba(157, 204, 255, 0.2)"
        carouselData={CustomCarouselData}
        carouselType="choiseCourse"
      />
      <EverythingYouCan data={EverythingYouCanData} />
      <TopEducation
        title="Top  Education offers and deals are listed here"
        link="#"
        background="#FFFFFF"
        carouselData={TopEducationData}
        carouselType="customType"
      />
    </>
  );
}

export default Page;
