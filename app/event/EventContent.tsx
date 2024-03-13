import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DateRangeEvent,
  PastEvent,
  PendingEvent,
  UpcomingEvent,
} from "./CategoryEvent";
const EventContent = () => {
  return (
    <>
      <div className="py-4 pl-8 pr-12 h-screen">
        <h1 className="font-bold text-2xl text-black mb-7">Scheduled Event</h1>
        <div className="">
          <Tabs defaultValue="upcoming" className="w-full h-screen">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="date-range">Date Range</TabsTrigger>
            </TabsList>
            <UpcomingEvent />
            <PendingEvent />
            <PastEvent />
            <DateRangeEvent />
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default EventContent;
