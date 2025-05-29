"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import {
    PresentationChartBarIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder="">
      <div className="mb-3 p-5">
        <Typography variant="h5" color="blue-gray" as="h5" placeholder="">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
            <ListItemPrefix>
                <AcademicCapIcon className="h-5 w-5"/>
            </ListItemPrefix>
            Geral
        </ListItem>
        
      </List>
    </Card>
  );
}