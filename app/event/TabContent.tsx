import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Meeting {
  title?: string;
  note?: string;
  dateCreated?: string;
  dateEvent?: string;
  host?: string;
  idTab: string;
  children?: any;
}

export const TabContent: React.FC<Meeting> = ({
  title,
  note,
  dateCreated,
  dateEvent,
  host,
  idTab,
  children,
}) => {
  return (
    <>
      <TabsContent value={idTab}>
        {children ? (
          children
        ) : (
          <>
            <div className="bg-white">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="w-full flex justify-between">
                      <div className="flex flex-col items-start">
                        <h1 className="text-sm font-semibold">{title}</h1>
                        <p className="text-slate-400 text-sm">
                          {note ? `"${note}"` : ""}
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-2/4">
                        <h1 className="text-sm font-semibold">Date Created</h1>
                        <p className="text-slate-400 text-sm">{dateCreated}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <div className="flex gap-4">
                        <h1 className="text-sm font-semibold">Live at:</h1>
                        <p className="text-slate-400 text-sm">{dateEvent}</p>
                      </div>
                      <div className="flex gap-4">
                        <h1 className="text-sm font-semibold">Host:</h1>
                        <p className="text-slate-400 text-sm">{host}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </>
        )}
      </TabsContent>
    </>
  );
};
