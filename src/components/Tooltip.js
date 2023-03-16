import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
      <Popover>
        <PopoverHandler>
          <Button variant="gradient" className="bg-gray-900">Show Popover</Button>
        </PopoverHandler>
        <PopoverContent className="bg-red-700">
          <h1>This is a very beautiful popover, show some love.</h1>
        </PopoverContent>
      </Popover>
    );
  }