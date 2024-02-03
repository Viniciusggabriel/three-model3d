import { Menubar, MenubarMenu } from "../../../ui/menubar";
import { ModeToggle } from "../../../ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import { Grip, Github, Linkedin } from "lucide-react";

const Hamburger = () => {
  return (
    <Sheet>
      <Menubar className="py-4">
        <MenubarMenu>
          <ModeToggle />
          <SheetTrigger>
            <Grip />
          </SheetTrigger>
        </MenubarMenu>
      </Menubar>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Hello World! 🔥</SheetTitle>
          <SheetDescription>
            <a
              href="https://github.com/Viniciusggabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center gap-5"
            >
              Github
              <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </SheetDescription>
          <SheetDescription>
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center gap-5"
            >
              LinkedIn
              <Linkedin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
