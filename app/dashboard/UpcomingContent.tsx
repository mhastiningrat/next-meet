"use client";

import { useSelector } from "react-redux";
import UpcomingCard from "../components/UpcomingCard";
const UpcomingContent = () => {
  const data = useSelector((state: any) => state.posts);
  console.log("data", data);
  return (
    <>
      {data
        ? data.map((i: any) => {
            return (
              <UpcomingCard
                key={i.id}
                id={i.id}
                title={i.title}
                host={i.host}
                location={i.location}
                note={i.note}
                duration={i.duration}
              />
            );
          })
        : ""}
    </>
  );
};

export default UpcomingContent;
