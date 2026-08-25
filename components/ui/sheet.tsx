"use client";

import * as React from "react";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;
const SheetPortal = Dialog.Portal;

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn("fixed inset-0 z-50 bg-[rgba(17,17,17,0.28)] backdrop-blur-[3px]", className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col border-l border-[var(--color-bordercol)] bg-white p-5 text-[var(--color-foreground)] shadow-[0_24px_70px_rgba(17,17,17,0.18)] outline-none",
          className
        )}
        {...props}
      >
        <div className="flex justify-end">
          <SheetClose className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-[var(--color-bordercol)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-panel)]">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
        {children}
      </Dialog.Content>
    </SheetPortal>
  );
}

export { Sheet, SheetClose, SheetContent, SheetTrigger };
