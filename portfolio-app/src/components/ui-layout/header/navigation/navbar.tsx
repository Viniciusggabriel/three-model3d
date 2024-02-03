import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../../ui/menubar";
import { ModeToggle } from "../../../ui/mode-toggle";
import { Github, Linkedin, ArrowRightLeft } from "lucide-react";

const Navbar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <ModeToggle />
        <MenubarTrigger>
          links
          <ArrowRightLeft className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <a
              href="https://github.com/Viniciusggabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between w-full"
            >
              <span>Github</span>
              <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between w-full"
            >
              <span>LinkedIn</span>
              <Linkedin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
