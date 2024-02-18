"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "react-responsive";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState, useRef, RefObject } from "react";
import { Button } from "../ui/button";

// dropdown menu ... for changing the view for default position of the resible panel
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImperativePanelHandle } from "react-resizable-panels";
import CategoryForm from "../forms/CategoryForm";

type Props = {};

function CategorySection({}: Props) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [position, setPosition] = useState("both");
  const [sidebarSize, setSidebarSize] = useState<number>(0);
  const [heroSize, setHeroSize] = useState<number>(0);

  const sidebarRef = useRef<ImperativePanelHandle>(null);
  const heroRef = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    if (position === "both") {
      setSidebarSize(25);
      setHeroSize(75);
    }
    if (position === "sidebar") {
      setSidebarSize(100);
      setHeroSize(0);
    }
    if (position === "heroForm") {
      setSidebarSize(10);
      setHeroSize(100);
    }
  }, [position]);

  
  useEffect(() => {
    {!isPortrait}{
      setSidebarSize(0)
    }
    console.log(sidebarSize);
    sidebarRef?.current?.resize(sidebarSize);
    console.log(heroSize);
    heroRef?.current?.resize(heroSize);
  }, [sidebarSize, heroSize]);

  const handleResize = (size: number) => {};

  return (
<ScrollArea className="w-[950px] whitespace-wrap mb-24 rounded-md border-dashed">
<div className="">
      <div className="mb-2 flex justify-end fixed z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Panel</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              {!isPortrait && (
                <>
                  <DropdownMenuRadioItem value="both">
                    Both
                  </DropdownMenuRadioItem>
                </>
              )}
                  <DropdownMenuRadioItem value="sidebar">
                    Sidebar
                  </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="heroForm">
                Hero Form
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[100vh] w-full rounded-lg border bg-card"
      >
        <ResizablePanel
          ref={sidebarRef}
          onResize={handleResize}
          collapsedSize={0}
          defaultSize={25}
          minSize={25}
          collapsible={true}
          order={1}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          ref={heroRef}
          collapsedSize={0}
          defaultSize={75}
          minSize={40}
          collapsible={true}
          order={2}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              <CategoryForm />
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default CategorySection;
