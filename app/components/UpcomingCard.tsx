"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { deletePost, updatePost, findPost } from "@/lib/redux/slices/postSlice";
import { useDispatch } from "react-redux";
import { LuMoreVertical, LuCopy, LuTrash2 } from "react-icons/lu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Loading from "@/app/components/Loading";
import { setShow } from "@/lib/redux/slices/loadingSlice";
import { useState } from "react";

const formSchema = z.object({
  host: z.string().min(2, {
    message: "Host name must be choosen.",
  }),
  eventName: z.string().min(6, {
    message: "Event name must be at least 6 characters.",
  }),
  duration: z.string().min(2, {
    message: "Duration must be choosen.",
  }),
  location: z.string().optional(),
  note: z.string().optional(),
});

const formUpdateNoteSchema = z.object({
  note: z.string().optional(),
});

const UpcomingCard = ({ id, title, host, duration, location, note }: any) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const formUpdateNote = useForm<z.infer<typeof formUpdateNoteSchema>>({
    resolver: zodResolver(formUpdateNoteSchema),
    defaultValues: {
      note: note,
    },
  });
  const formUpdate = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: title,
      host: host,
      note: note,
      location: location,
      duration: duration,
    },
  });
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };
  function onUpdateNote(values: z.infer<typeof formUpdateNoteSchema>) {
    console.log(values);
    const newPost = {
      id: id,
      title: title,
      host: host,
      duration: duration,
      location: location,
      note: values.note,
    };

    setTimeout(() => {
      dispatch(updatePost(newPost));
      setOpen(false);
    }, 3000);
  }

  function onUpdate(values: z.infer<typeof formSchema>) {
    console.log(values);
    const newPost = {
      id: id,
      title: values.eventName,
      host: values.host,
      duration: values.duration,
      location: values.location,
      note: values.note,
    };

    setTimeout(() => {
      dispatch(updatePost(newPost));
      setOpenEdit(false);
    }, 3000);
  }

  return (
    <>
      <div className="rounded-md border-sm border cursor-pointer shadow-md border-t-4 border-t-black bg-yellow-400 p-4 w-full h-[150px] flex flex-col justify-between hover:shadow-md hover:border-t-white">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl truncate">{title}</h1>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <LuMoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setOpenEdit(true)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(true)}>
                Add internal note
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(id)}>
                <button className="flex gap-1 text-sm p-1 text-red-600 ">
                  <LuTrash2 size={20} />
                  <span>Delete</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <h1 className="text-sm text-slate-600">{duration}</h1>
        <p className="text-slate-600 text-sm">{note}</p>
        <div className="flex justify-end">
          <button className="flex gap-1 text-sm p-2 text-white rounded-full hover:text-black">
            <LuCopy size={20} />
            <span>Copy</span>
          </button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-5">Update Meeting Note</DialogTitle>
            <Form {...formUpdateNote}>
              <form
                onSubmit={formUpdateNote.handleSubmit(onUpdateNote)}
                className="space-y-8"
              >
                <FormField
                  control={formUpdateNote.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Input
                          className="py-5"
                          placeholder="Notes"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-5">Update Meeting Data</DialogTitle>
            <Form {...formUpdate}>
              <form
                onSubmit={formUpdate.handleSubmit(onUpdate)}
                className="space-y-8"
              >
                <FormField
                  control={formUpdate.control}
                  name="host"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Host <span className="text-xs text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full py-5">
                            <SelectValue placeholder="Host name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="joko">Joko</SelectItem>
                            <SelectItem value="mul">Mul</SelectItem>
                            <SelectItem value="arman">Arman</SelectItem>
                            <SelectItem value="maulana">Maulana</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formUpdate.control}
                  name="eventName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Event Name{" "}
                        <span className="text-xs text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-5"
                          placeholder="Name your event"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formUpdate.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Duration <span className="text-xs text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full py-5">
                            <SelectValue placeholder="Duration" {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15 Minutes">
                              15 Minutes
                            </SelectItem>
                            <SelectItem value="30 Minutes">
                              30 Minutes
                            </SelectItem>
                            <SelectItem value="45 Minutes">
                              45 Minutes
                            </SelectItem>
                            <SelectItem value="60 Minutes">
                              60 Minutes
                            </SelectItem>
                            <SelectItem value="more than 60 Minutes">
                              More
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formUpdate.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full py-5">
                            <SelectValue placeholder="Location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Google Meet</SelectItem>
                            <SelectItem value="offline">
                              Offline Meeting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formUpdate.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Input
                          className="py-5"
                          placeholder="Notes"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpcomingCard;
