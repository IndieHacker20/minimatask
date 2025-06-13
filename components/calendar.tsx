"use client";

import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export function Calendar() {
  const timeboxes = useQuery(api.timeboxes.list);
  const createTimebox = useMutation(api.timeboxes.create);
  const [showDialog, setShowDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const events = timeboxes?.map(box => ({
    title: box.title,
    start: new Date(box.start),
    end: new Date(box.end),
    completed: box.completed,
  })) || [];

  const handleSelect = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setShowDialog(true);
  };

  const handleSubmit = () => {
    createTimebox({
      title: newEvent.title,
      start: newEvent.start.toISOString(),
      end: newEvent.end.toISOString(),
    });
    setShowDialog(false);
    setNewEvent({ title: "", start: new Date(), end: new Date() });
  };

  return (
    <div className="h-[600px] p-4">
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Timebox</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 p-4">
            <Input
              placeholder="Event title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <Button onClick={handleSubmit}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
      />
    </div>
  );
}